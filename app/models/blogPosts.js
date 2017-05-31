var mongoose = require("mongoose");

var Post = new mongoose.Schema({


    title: String,

    date: {

        month: String,
        day: String,
        year: String
    }, 

    body: String,
    author: String,

//ToDo: add comments if time permits
    Comments:[
            {

            comment: String,
            user: String
        }
    ]
});

module.exports.model("post", Post);