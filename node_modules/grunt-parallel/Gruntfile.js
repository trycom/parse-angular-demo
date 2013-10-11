module.exports = function(grunt) {
  
  grunt.registerTask('fast', function() {
    grunt.log.write('Fast task finished.');
  });
  
  grunt.registerTask('block', function() {
    var ms = 1000;
    var start = +(new Date());
    while (new Date() - start < ms);
    grunt.log.write('Blocking finished.');
  });

  // Project configuration.
  grunt.initConfig({
    parallel: {
      assets: [{
        grunt: true,
        args: ['fast']
      }, {
        grunt: true,
        args: ['block']
      },{
        grunt: true,
        args: ['fast']
      }]
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

};
