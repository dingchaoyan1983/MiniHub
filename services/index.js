var ROOT= require('../REPO_ROOT');
var fs = require('fs');
var path = require('path');
var Faker = require('faker');

function contributors() {
    var contributors = [];

    for(let i = 0; i < Faker.random.number({min: 1, max: 5}); i++) {
        contributors.push([Faker.name.lastName(), Faker.name.firstName()].join('.'));
    }

    return contributors;
}

function listProjects () {
    var files = fs.readdirSync(ROOT);
    var projects = [];

    files.forEach(function(file) {
        var stat = fs.lstatSync(path.resolve(ROOT, file));
        if(stat.isDirectory()) {
            projects.push(
                {
                    name: file,
                    description: Faker.random.words(Faker.random.number({min: 15, max: 25})),
                    contributors: contributors(),
                    createTime: Faker.date.recent(200),
                    type: 'project'
                }
            )
        }
    });

    return projects;
}

function listProjectRootFolders (project, relatedPath) {
    var paths = [ROOT, project];

    if(relatedPath) {
        paths = paths.concat(relatedPath);
    }

    var rootPath = path.resolve.apply(path, paths);
    var files = fs.readdirSync(rootPath);
    var rootFolders = [];

    files.forEach(function(file) {
        var stat = fs.lstatSync(path.resolve(rootPath, file));

        var o = {
               name: file,
               modifiedBy: [Faker.name.lastName(), Faker.name.firstName()].join('.'),
               modifiedTime: Faker.date.recent(200)
        }

        if(stat.isDirectory()) {
           o.type = 'folder';
        }

        if(stat.isFile()) {
            o.type = 'file';
        }

        rootFolders.push(o);
    });

    return rootFolders;
}

function loadFile(project, relatedPath) {
    var code = '';
    var extname = '';
    var paths = [ROOT, project];

    if(relatedPath) {
        paths = paths.concat(relatedPath);
    }

    var rootPath = path.resolve.apply(path, paths);
    var stat = fs.lstatSync(rootPath);

    if(stat.isFile()) {
        code = fs.readFileSync(rootPath, {encoding: 'utf-8'});
        extname = path.extname(rootPath);
    }

    return {
        code: code,
        extname: extname
    }
}

module.exports = {
    listProjects: listProjects,
    listProjectRootFolders: listProjectRootFolders,
    loadFile: loadFile
}