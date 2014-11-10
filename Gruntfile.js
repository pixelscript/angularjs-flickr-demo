
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    watch: {
        app: {
            files: ['basics/**/*','app/**/*','Gruntfile.js']
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
