module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-purifycss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-casperjs');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      dist: 'dist/*'
    },

    copy: {
      client: {
        src: [ 'client/index.html', 'client/**/*.html' ],
        dest: 'dist/'
      },
      server: {
        src: ['server/**'],
        dest: 'dist/'
      }
    },

    jshint: {
      files: ['client/**/*.js', 'client/*.js', 'server/*'],
      options: {
        force: 'true',
        jshintrc: '.jshintrc',
      }
    },

    purifycss: {
      options: {},
      target: {
        src: ['client/*.html', 'client/**/*.html'],
        css: ['client/styles/styles.css'],
        dest: 'dist/purestyles.css'
      }
    },

    cssmin: {
      build: {
        files: {
          'dist/purestyles.min.css': ['dist/purestyles.css']
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['client/*.js', 'client/**/*.js'],
        dest: 'dist/built.js'
      }
    },

    uglify: {
      my_target: {
        files: {
          'dist/built.min.js': ['dist/built.js']
        }
      }
    },

    casperjs: {
      options: {},
      e2e: {
        files: {
          'results/casper':
        }
      }
    },

    watch: {
      scripts: {
        files: ['client/*.js','client/**/*.js'],
        tasks: ['concat', 'uglify']
      },

      css: {
        files: 'client/styles/styles.css',
        tasks: ['cssmin']
      }
    }
  });
}
