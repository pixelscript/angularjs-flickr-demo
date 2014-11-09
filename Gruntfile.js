
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    watch: {
        app: {
            files: ['app/**/*','Gruntfile.js']
        },
        options: {
            livereload: true
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['watch']);

};
