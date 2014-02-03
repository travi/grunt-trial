/*
 * grunt-trial
 * https://github.com/travi/grunt-trial
 *
 * Copyright (c) 2014 Matt Travi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    var yaml = require('js-yaml'),
        fs = require('fs');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('trial', 'The best Grunt plugin ever.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
//    this.files.forEach(function(f) {

      var f = {
              dest: 'tmp/default.js'
          },
          src = '';

      var dependencyMap = yaml.safeLoad(fs.readFileSync(options.dependencyFile, 'utf8'));

      var defaultDeps = dependencyMap['default'];
      grunt.util._.each(defaultDeps['js'], function (file) {
          src += grunt.file.read(options.resourcesRoot + file);
      });

      // Concat specified files.
//      var src = f.src.filter(function(filepath) {
//        // Warn on and remove invalid source files (if nonull was set).
//        if (!grunt.file.exists(filepath)) {
//          grunt.log.warn('Source file "' + filepath + '" not found.');
//          return false;
//        } else {
//          return true;
//        }
//      }).map(function(filepath) {
//        // Read file source.
//        return grunt.file.read(filepath);
//      }).join(grunt.util.normalizelf(options.separator));
//
//      // Handle options.
//      src += options.punctuation;

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
//  });

};
