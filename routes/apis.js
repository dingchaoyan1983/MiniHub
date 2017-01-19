var express = require('express');
var router = express.Router();
var service = require('../services');

/* api listing. */
router.get('/projects', function(req, res, next) {
  var files = service.listProjects();
  res.json({data: files});
});

router.get('/projects/:projectName/folders', function(req, res, next) {
  var relatedPath = req.query.relatedPath;
  var project = req.params.projectName;
  var rootFolders = service.listProjectRootFolders(project, relatedPath);
  res.json({data: rootFolders});
});

router.get('/projects/:projectName/file', function(req, res, next) {
  var relatedPath = req.query.relatedPath;
  var project = req.params.projectName;
  var file = service.loadFile(project, relatedPath);
  res.json({data: file});
});

module.exports = router;
