var httpService = require('../services/http');

function Article(id, title, body) {
  this.id = id;
  this.title = title;
  this.body = body;
}

Article.findAll = function(cb) {
  httpService.doXhrRequest('GET', 'http://jsonplaceholder.typicode.com/posts', null, cb);
};


Article.prototype.create = function(cb){
  httpService.doXhrRequest('POST', 'http://jsonplaceholder.typicode.com/posts', this, cb);
};

module.exports = Article;
