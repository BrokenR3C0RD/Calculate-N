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
      "browser": {
        "options": {
          "moduleType": "js",
          "moduleName": "calculateN"
        },
        "files": {
          "build/calculate-n.inc.js": "src/grammar.jison"
        }
      }
    },
    "browserify": {
      "dist": {
        "files": {
          "build/calculate-n.js": "build/calculate-n.inc.js"
        }
      }
    }
  });
  grunt.registerTask("all", "Build all distributions", ["jison:amdjs", "jison:commonjs", "jison:browser", "browserify:dist"]);
  grunt.registerTask("default", ["jison:commonjs", "jison:browser", "browserify:dist"]);
};
