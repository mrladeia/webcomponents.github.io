module.exports = function(grunt) {
    grunt.initConfig({

        bower: {
            install: {
                options: {
                    targetDir: 'src/files/vendor',
                    cleanBowerDir: true
                }
            }
        },

        pagespeed: {
            desktop: {
                options: {
                    url: "http://webcomponentsorg.github.io/webcomponents.org",
                    strategy: "desktop",
                    threshold: 80
                }
            },
            mobile: {
                options: {
                    url: "http://webcomponentsorg.github.io/webcomponents.org",
                    strategy: "mobile",
                    threshold: 70
                }
            },
            options: {
                // PageSpeed API key defined as an environment variable
                // Generate your own: http://goo.gl/FQplpu
                key: process.env.PAGESPEED_API_KEY,
                url: "http://webcomponentsorg.github.io"
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'src/files/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'out/css/',
                ext: '.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-pagespeed');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

};
