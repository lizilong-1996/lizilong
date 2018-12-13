var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var router = express.Router();
var URL = require('url');
// var User = require('./user');
var users = require('../models/User'); // 引入模型
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('respond with a resource')
  res.send('respond with a resource');
});


router.use(bodyParser.urlencoded({
  extended: false
}));

router.post('/insertOrUpdate', function(req, res) {
  var state = parseInt(req.query.state);
  console.log(state)
  console.log(req.query)
  if (state == 1) {
    var updates = {
      $set: {
        name: "李子龙111"
      }
    };
    users.update({
      _id: "5b90cfb8b79f0b5f28c50b32"
    }, updates, function(err, docs) {
      if (err) console.log(err);
      console.log('更改成功：' + docs);
    })
  } else {


    var name = req.query.name;
    var telephone = req.query.telephone;
    var conpany_name = req.query.conpany_name;
    console.log(name);
    console.log(telephone);
    console.log(conpany_name);
    var user = new users({
      name: name,
      telephone: telephone,
      conpany_name: conpany_name,
    });
    user.save((err) => { //添加
      if (err) {
        console.log(err);
        res.status(500).send('database err').end();
      } else {
          console.log(err);
          res.status(200).send({meg:'request ok',status:200}).end();

      }
      // console.log('save status:', err ? 'failed' : 'success');
      // !err && res.send({
      //   code: 200
      // })
    });
  }

});

router.post('/delete', function(req, res) {
  users.findOne({
    name: req.query.name
  }, function(error, doc) {
    if (error) {
      console.error(error)
      return
    } else {
      console.error("删除后数据：", doc)
    }

  });
  var conditions = {
    name: "科比"
  };
  users.remove(conditions, function(error) {
    if (error) {
      console.error(error);
    } else {
      console.error("用户删除成功")
    }
  });
  //查询用户名为“tiny”的文档记录是否还存在


});





//多条数据插入

// blogModel.insertMany([
//     {title: "mongoose1", author: "L"}, 
//     {title: "mongoose2", author: "L"}
//     ], function(err, docs){
//         if(err) console.log(err);
//         console.log('保存成功：' + docs);
// });






// router.get('/getUserInfo', function(req, res, next) {









// console.log(num);
// var params = URL.parse(req.url, true).query;
// var num = parseInt(params.id);
// User1.find({
//     "id":{$lte:num}

//   },function (err, doc) {
//         if(err){
//             res.send('server or db error');
//         }else{
//             console.log('登录成功用户：'+doc);
//             if(doc==null){
//                 res.send('用户名或密码有误');
//             }else{
//                 // res.send('login success');
//                 res.send(doc);
//             }
//         }
//     })



//     var user = new User();
//     var params = URL.parse(req.url, true).query;
//     var num = params.id;
//  if(params.id == '1') {

//     user.name = "ligh";
//     user.age = "1";
//     user.city = "北京市"; 

// }else{  
//     user.name = "SPTING";
//     user.age = "1";
//     user.city = "杭州市";
// }

//   var response = {status:1,data:user};
//   res.send(JSON.stringify(response));




// });



module.exports = router;