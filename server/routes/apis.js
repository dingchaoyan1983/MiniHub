var express = require('express');
var router = express.Router();
var service = require('../services');

/* api listing. */
router.get('/projects', function(req, res, next) {
  var files = service.listProjects(function(err, projects) {
    if(err) {
      next(err);
    } else {
      res.json({data: projects});
    }
  });
});

router.put('/projects/:projectName/file', function(req, res, next) {
  var relatedPath = req.body.relatedPath;
  var project = req.params.projectName;
  var code = req.body.code;
  var file = service.writeFile(project, relatedPath.split(','), code, function(err, data){
    if(err) {
      next(err);
    } else {
      res.json({data: data});
    }
  });
});

router.get('/projects/:projectName/fileTree', function(req, res, next) {
  var relatedPath = req.query.relatedPath;
  var project = req.params.projectName;
  
  var file = service.loadFileTree(project, relatedPath, function(err, data){
    if(err) {
      next(err);
    } else {
      res.json({data: data});
    }
  });
});

module.exports = router;
