const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            trim: true,
            unique: true,
            // match: /^[a-zA-Z0-9]+$/,
            // index: true,
        },
        email:{
            type:String,
            required:true,
            trim: true,
            unique: true,
            //match: /^[a-zA-Z0-9]+$/,
            //max: 50,
        },
        password:{
            type:String,
            required:true,
            minlength: 6,
            // match: /^[a-zA-Z0-9]+$/,
            // index: true,

        }


    }, 
    {
    timestamps: true
    }
);

const User = mongoose.model('User' , userSchema)
module.exports = User;