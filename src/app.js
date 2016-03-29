require('./vendors');

var Article = require('./model/Article');


var form = document.querySelector('form');


form.addEventListener('submit', articleCreate);

function articleCreate(e) {
  e.preventDefault();
  var title = document.querySelector('#articleTitle').value;
  var body = document.querySelector('#articleBody').value;
  
  var article = new Article(null, title, body);
  
  article.create(function(createdArticle) {
    console.log(createdArticle);
  })
  
}