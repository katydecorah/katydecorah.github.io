require('dotenv').config();

const appropriateImages = require('@mapbox/appropriate-images');
const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
const rimraf = require('rimraf');
const staging = './img/staging/';
const destination = './img/ready/';

AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID;
AWS.config.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
AWS.config.region = process.env.AWS_REGION;

rimraf(destination, function() {
  console.log(`🧹 Cleared out ${destination}`);
});

const myImageConfig = fs.readdirSync(staging).reduce((obj, file) => {
  const ext = path.extname(file);
  const slug = file.replace(ext, '');
  if (ext === '.png' || ext === '.jpg') {
    obj[slug] = {
      basename: `${file}`,
      sizes: [{ width: 1000 }, { width: 1600 }]
    };
  }
  return obj;
}, {});

appropriateImages
  .generate(myImageConfig, {
    inputDirectory: staging,
    outputDirectory: destination
  })
  .then(output => {
    console.log('⚙️  Generated all these images:');
    console.log(output.join('\n'));
  })
  .then(() => {
    // copy over original files
    Object.keys(myImageConfig).forEach(file => {
      const path = myImageConfig[file].basename;
      fs.copyFileSync(`${staging}${path}`, `${destination}${path}`);
    });
    console.log(`📠  Copied original files to ${destination}`);
  })
  .then(() => {
    // upload to S3
    const files = fs.readdirSync(destination).reduce((arr, file) => {
      arr.push({
        path: `${destination}${file}`,
        file: file.replace('-1000', '@1000').replace('-1600', '@1600')
      });
      return arr;
    }, []);
    return Promise.all(
      files.map(file => {
        const body = fs.createReadStream(file.path);
        return module.exports.putToS3(file.file, body);
      })
    );
  })
  .then(() => {
    // delete files in staging
    fs.readdir(staging, (err, files) => {
      if (err) throw err;
      for (const file of files) {
        fs.unlink(path.join(staging, file), err => {
          console.log(`🗑  Removed ${file} from ${staging}`);
          if (err) throw err;
        });
      }
    });
  })
  .then(() => {
    // delete files in destination
    fs.readdir(destination, (err, files) => {
      if (err) throw err;
      for (const file of files) {
        fs.unlink(path.join(destination, file), err => {
          console.log(`🗑  Removed ${file} from ${destination}`);
          if (err) throw err;
        });
      }
    });
  })
  .catch(errors => {
    if (Array.isArray(errors)) {
      errors.forEach(err => console.error(err.stack));
    } else {
      console.error(errors.stack);
    }
  });

module.exports.putToS3 = (Key, Body) => {
  const s3 = new AWS.S3();
  return new Promise((resolve, reject) => {
    s3.putObject(
      {
        Bucket: process.env.AWS_BUCKET,
        Key,
        Body,
        ContentEncoding: 'base64'
      },
      function(err) {
        if (err) return reject(err);
        console.log(`⬆️  Uploaded ${Key}`);
        return resolve(Key);
      }
    );
  });
};
