module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              // Task 
      dist: {                            // Target 
        files: {                         // Dictionary of files 
          'assets/stylesheets/styles.css': 'assets/stylesheets/styles.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['assets/stylesheets/*.scss'],
        tasks: ['sass', 'cssmin']
      }
    },
    cssmin: {
      target: {
        files: {
          'assets/stylesheets/app.min.css':
            [
              // 'assets/stylesheets/bootstrap.css',
              'assets/stylesheets/styles.css'
            ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['sass', 'cssmin', 'watch']);
};