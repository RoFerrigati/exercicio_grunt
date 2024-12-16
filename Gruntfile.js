module.exports = function(grunt) {
    grunt.initConfig({
        // Configuração para compilar e minificar o LESS
        less: {
            development: {
                options: {
                    compress: true // Minificar durante a compilação
                },
                files: {
                    // Compilar e minificar diretamente para dist/css/style.min.css
                    'dist/css/style.min.css': 'css/style.less'
                }
            }
        },
        // Configuração para minificar o JavaScript
        uglify: {
            my_target: {
                files: {
                    // Minificar o script.js para dist/js/script.min.js
                    'dist/js/script.min.js': ['js/script.js']
                }
            }
        }
    });

    // Carregar os plugins do Grunt para LESS e Uglify
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Definir a tarefa padrão que será executada ao rodar `grunt`
    grunt.registerTask('default', ['less', 'uglify']);
};