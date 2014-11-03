
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html');
};

exports.lockboxInbound = function(req, res){
  res.render('lockbox-inbound.html');
};

exports.lockboxOutbound = function(req, res){
  res.render('lockbox-outbound.html');
};

exports.claim = function(req, res){
  res.render('claim.html');
};

exports.keyinDetail = function(req, res){
  res.render('keyin-detail.html');
};

exports.reports = function(req, res){
  res.render('reports.html');
};

