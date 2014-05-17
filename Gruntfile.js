module.exports = function(grunt) {


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      files: {
        src: 'js/lib/*.js',
        dest: 'js/',
        expand: true,
        flatten: true,
        ext: '.min.js'
      }

    },
    copy: {
      css: {
        src: 'css/style.css',
        dest: '_site/css/style.css',
      },
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/source/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/style.css': 'css/lib/style.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 9']
      },
      target: {
        src: 'css/style.css'
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['js/lib/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: ['css/lib/*.scss'],
        tasks: ['sass','autoprefixer','copy:css'],
        options: {
          spawn: false,
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['uglify','imagemin','sass','autoprefixer','copy','watch']);

};
