module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-casperjs');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      dist: 'dist/*'
    },

    jshint: {
      files: ['client/**/*.js', 'client/*.js', 'server/*'],
      options: {
        force: 'true',
        jshintrc: '.jshintrc',
      }
    },

    cssmin: {
      build: {
        files: {
          'dist/styles.min.css': ['client/styles/styles.css']
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
