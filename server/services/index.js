var ROOT= require('../../REPO_ROOT');
var fs = require('fs');
var path = require('path');
var Faker = require('faker');
// introduce Promise polyfill to compat the lower node version 
var Promise = require('es6-promise');

function promisefy(func, context) {
    var args = Array.prototype.slice.call(arguments, 2);

    return new Promise(function(resolve, reject) {
        var cb = function(error, result) {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        }

        args.push(cb);
        func.apply(context, args);
    });
}

function contributors() {
    var contributors = [];

    for(let i = 0; i < Faker.random.number({min: 1, max: 5}); i++) {
        contributors.push([Faker.name.lastName(), Faker.name.firstName()].join('.'));
    }

    return contributors;
}

function listProjects (cb) {
    promisefy(fs.readdir, fs, ROOT)
    .then(function(files) {
        return Promise.all(files.map(function(file) {
            return promisefy(fs.lstat, fs, path.resolve(ROOT, file)).then(function(stat) {
                return {
                    stat: stat,
                    fileName: file
                }
            })
        }))
    })
    .then(function(files) {
        var projects =  files.filter(function(file) {
            return file.stat.isDirectory();
        }).map(function(file) {
            return {
                name: file.fileName,
                description: Faker.random.words(Faker.random.number({min: 15, max: 25})),
                contributors: contributors(),
                createTime: Faker.date.recent(200),
                type: 'project'
            }
        });

        cb(null, projects);
    })
    .catch(cb); 
}

function writeFile(project, relatedPath, code, cb) {
    var extname = '';
    var paths = [ROOT, project];

    if(relatedPath) {
        paths = paths.concat(relatedPath);
    }

    var rootPath = path.resolve.apply(path, paths);
    
    promisefy(fs.lstat, fs, rootPath)
    .then(function(stat) {
        if(stat.isFile()) {
            return promisefy(fs.writeFile, fs, rootPath, code, {encoding: 'utf-8'})
                    .then(function() {
                        return {
                            content: code,
                            isFile: true,
                            isDirectory: false
                        }
                    })    
        } else {
            throw new Error("it is not a file, so can't write it.");
        }
    })
    .then(cb.bind(null, null))
    .catch(cb);
}

function loadFileTree(project, relatedPath, cb) {
    var paths = [ROOT, project];

    if(relatedPath) {
        paths = paths.concat(relatedPath);
    }

    var rootPath = path.resolve.apply(path, paths);

    promisefy(fs.lstat, fs, rootPath)
    .then(function(stat) {
        if (stat.isFile()) {
            return promisefy(fs.readFile, fs, rootPath, {encoding: 'utf-8'})
                   .then(function (file) {
                       return {
                           content: file,
                           isFile: true,
                           isDirectory: false
                       }
                   });
        } else if (stat.isDirectory()) {
            return promisefy(fs.readdir, fs, rootPath)
                   .then(function(files) {
                       return Promise.all(files.map(function(file) {
                            return promisefy(fs.lstat, fs, path.resolve(rootPath, file))
                                    .then(function(stat) {
                                        var o = {
                                                name: file,
                                                modifiedBy: [Faker.name.lastName(), Faker.name.firstName()].join('.'),
                                                modifiedTime: Faker.date.recent(200)
                                            };

                                            if(stat.isDirectory()) {
                                                o.type = 'folder';
                                            }

                                            if (stat.isFile()) {
                                                o.type = 'file';
                                            }

                                            return o;
                                    })
                        }))
                        .then(function(files) {
                            return {
                                content: files.sort(function(file1, file2) {
                                    return file1.type < file2.type;
                                }),
                                isDirectory: true,
                                isFile: false,
                            };
                        })
                   })
        } else {
            throw new Error("can't recognized file type");
        }
    })
    .then(cb.bind(null, null))
    .catch(cb);

}

module.exports = {
    listProjects: listProjects,
    writeFile: writeFile,
    loadFileTree: loadFileTree
}
