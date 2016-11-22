module.exports = function(grunt){
  grunt.loadNpmTasks("grunt-jison");
  grunt.loadNpmTasks("grunt-browserify");

  grunt.initConfig({
    "jison": {
      "amdjs": {
        "options": {
          "moduleType": "amd"
        },
        "files": {
          "build/calculate-n.amd.js": "src/grammar.jison"
        }
      },
      "commonjs": {
        "options": {
          "moduleType": "commonjs"
        },
        "files": {
          "build/calculate-n.common.js": "src/grammar.jison"
        }
      },
    },
    "browserify": {
      "dist": {
        "options": {
          "alias": ["./build/calculate-n.common.js:calculate-n"],
          "exclude": ["readline-sync"]
        },
        "src": "build/calculate-n.common.js",
        "dest": "build/calculate-n.js"
      }
    }
  });
  grunt.registerTask("all", "Build all distributions", ["jison:amdjs", "jison:commonjs", "browserify:dist"]);
  grunt.registerTask("default", ["jison:commonjs", "browserify:dist"]);
};
