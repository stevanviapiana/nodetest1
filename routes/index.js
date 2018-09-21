var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET user list */
router.get('/userlist', function(req,res) {
  console.log('iniciando user list');
  var db = require('../db');
  var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
   Users.find({}).lean().exec(
    function (e,docs){
      res.render('userlist', {"userlist":docs});
    });
  
  /* Users.find({}, function(err, docs) {
      if (!err){ 
          console.log(docs);
          process.exit();
      } else {throw err;}
  }); */

  }); 
   
  

module.exports = router;
