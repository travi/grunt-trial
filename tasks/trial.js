/*
 * grunt-trial
 * https://github.com/travi/grunt-trial
 *
 * Copyright (c) 2014 Matt Travi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    function concatenateContents(pageDependencies, resourcesRoot, fileType) {
        var src = '';

        grunt.util._.each(pageDependencies[fileType], function (file) {
            src += grunt.file.read(resourcesRoot + file);
        });

        return src;
    }

    function createFileFor(pageName, extension, pageDependencies, resourcesRoot) {
        grunt.file.write(
            'tmp/' + pageName + '.' + extension,
            concatenateContents(pageDependencies, resourcesRoot, extension)
        );
        grunt.log.writeln('File "' + 'tmp/' + pageName + '.' + extension + '" created.');
    }

    grunt.registerMultiTask('trial', 'The best Grunt plugin ever.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
                punctuation: '.',
                separator: ', '
            }),
            pageName;

        var dependencyMap = grunt.file.readYAML(options.dependencyFile);

        for (pageName in dependencyMap) {
            if (dependencyMap.hasOwnProperty(pageName)) {
                var resourcesRoot = options.resourcesRoot,
                    pageDependencies = dependencyMap[pageName];

                createFileFor(pageName, 'js', pageDependencies, resourcesRoot);
                createFileFor(pageName, 'css', pageDependencies, resourcesRoot);
            }
        }

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

    });

};
