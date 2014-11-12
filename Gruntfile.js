module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        watch: {
            app: {
                files: ['basics/**/*', 'app/**/*', 'Gruntfile.js']
            },
            options: {
                livereload: true
            }
        },
        serve: {
            path: ''
        },
        open: {
            app : {
                path : 'http://localhost:9000/app/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-open');

    // Default task.
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('launch', ['open:app','serve','watch']);


};
