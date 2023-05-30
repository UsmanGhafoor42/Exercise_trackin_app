const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema(
    {
        userId:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"

        }],
        activityname:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
            max: 50
        },
        duration:{
            type:Number,
            required:true
        },
        date:{
            type:Date,
            default:Date.now()
        }

    }, 
    {
    timestamps: true
    }
);

const exercise = mongoose.model('exercise' , exerciseSchema)
module.exports = exercise;