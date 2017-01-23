var express = require('express');
var router = express.Router();
var service = require('../services');

/* api listing. */
router.get('/projects', function(req, res, next) {
  var files = service.listProjects(function(err, projects) {
    if(err) {
      console.log(err);
      next(err);
    } else {
      res.json({data: projects});
    }
  });
});

router.get('/projects/:projectName/folders', function(req, res, next) {
  var relatedPath = req.query.relatedPath;
  var project = req.params.projectName;
  var rootFolders = service.listProjectRootFolders(project, relatedPath, function(err, folders) {
    if(err) {
      console.log(err);
      next(err);
    } else {
      res.json({data: folders});
    }
  });
});

router.get('/projects/:projectName/file', function(req, res, next) {
  var relatedPath = req.query.relatedPath;
  var project = req.params.projectName;
  var file = service.loadFile(project, relatedPath);
  res.json({data: file});
});

router.put('/projects/:projectName/file', function(req, res, next) {
  var relatedPath = req.body.relatedPath;
  var project = req.params.projectName;
  var code = req.body.code;
  var file = service.writeFile(project, relatedPath.split(','), code);
  res.json({data: file});
});

module.exports = router;
