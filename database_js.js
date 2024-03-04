const { error } = require('console');
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('database_js.db',(err) =>{
  if (err){
    return console.error(err.message);
  }
  console.log('Connected to the Blog SQlite database');
})
// Table one
db.run('CREATE TABLE Articles(ArticleID INTEGER PRIMARY KEY,ArticleName TEXT,Author TEXT,Author TEXT,Date TEXT', function(err){
  if(err){
    return console.log(err.message);
  }
  console.log('Table One Created')
})
// Table Two
db.run('CREATE TABLE Comments(Comment ID INTEGER PRIMARY KEY, Name TEXT,Content TEXT,Date TEXT, ArticleID INTEGER, FOREIGN KEY (ArticleID), REFERCENS Articles (ArticleID))' function(err){
  if(err){
    return console.log(err.message);
  }
  console.log('Table Two Created')
}
)
db.run('INSERT INTO Articles(ArticleID,ArticleName,Author,Date)'+
'VALUES("test","test",2019),'+
      '("test1","test2",2020),'+
      '("test3","test3",2021)');
db.run('INSERT INTO Comments(Content,Name,Date,ArticleID' +
'VALUES("مقالات مناسبة لمجتمعنا","mohamed",2019,1111),'+
'("عمل جيد واصلوا","Ahmed",2020,5050),'+
'("جزاكم الله كل خير","youssef",2021,6666)'
);
db.all('SELECT * FROM Article WEHERE Date = "2019"', function(err,table){
  if(err){
    return console.log(err.message);
  }
  console.log(table);
});
db.close( (err) => {
  if (err){
    return console.error(err.message);
  }
  console.log('Close the database connection')
})