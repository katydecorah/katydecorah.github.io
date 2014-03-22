module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

      /*  concat: {
            dist: {
                src: ['js/lib/*.js'],
                dest: 'js/script.js',
            }
        },*/

        uglify: {
           files: {
            src: 'js/lib/*.js',  // source files mask
            dest: 'js/',    // destination folder
            expand: true,    // allow dynamic building
            flatten: true,   // remove all unnecessary nesting
            ext: '.min.js'   // replace .js to .min.js
        }

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
        tasks: ['sass','autoprefixer'],
        options: {
            spawn: false,
        }
    }
}

});

    // 3. Where we tell Grunt we plan to use this plug-in.
    //grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify','imagemin','sass','autoprefixer','watch']);

};