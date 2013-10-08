'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-release');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.initConfig({
    karma: {
      options: {
        configFile: 'karma.conf.js',
        browsers: ['Chrome']
      },
      continuous: {
        singleRun: true
      },
      dev: {
        reporters: 'dots',
        background: true
      }
    },

    watch: {
      tests: {
        files: 'test/**/*.js',
        tasks: ['karma:dev:run']
      }
    }
  });

  //Load karma plugin
  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['karma:continuous']);
};