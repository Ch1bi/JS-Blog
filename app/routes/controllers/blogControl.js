var blog = require("../../models/blogPosts.js");

//creating a new blog post
function newPost = function(req, res){

new post({

title: req.body.title,
post: req.body.post

}).save(function(){

if(err){

console.log(err);
}

else{

res.redirect("/index")
}

})

}
