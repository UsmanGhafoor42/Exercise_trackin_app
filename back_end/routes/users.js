const router = require('express').Router();
const User = require('../models/user.model')
const exercise = require('../models/exercise.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { authenticateToken } = require('../middleware')
require('dotenv').config()
//Get all users on default route
router.get('/allUsers', authenticateToken, async (reqs, res) => {
  console.log("hello", reqs.id);
  const users = await User.find({ id: reqs.id })
  res.status(200).json(users);

})

router.get('/activities',authenticateToken, async (req, res) => {
  const ex = await exercise.find({userId:id}).populate('userId')
  

  res.status(200).json(ex);
})
//CREATE A NEW ACTIVITY
router.post("/createActivity", authenticateToken, async (req, res) => {
  console.log(req.body)
  const { activityname, description, duration, date } = req.body;
 
  try {
    
    const newActivity = await new exercise({
      activityname,
      description,
      duration,
      date,
      userId: id
    });
  
    //Save User
    const data = await newActivity.save();
    res.status(200).json(data);
  }
  catch (err) {
    res.status(400).json('Error: ' + err);
  }
});
///////////////DELETE ACTIVITY
// router.route('/removeActivity',authenticateToken).delete(async (req,res)=>{
//   console.log('body',req.body);
// const targetId=req.body.targetId
// try{
//   await exercise.deleteOne({_id:targetId})
//   res.status(200).json({ message: "Deleted activity" })
// }catch(e){
//   console.log(e)
//   res.status(404).json({ message: "Activity not found" })
//  }

 
// })
router.delete("/removeActivity/:id", authenticateToken, async (req, res) => {

  console.log("id => ",id.id)
 try {
   // console.log(req)
   let response = await exercise.findByIdAndDelete({ _id: req.params.id })
 console.log(response)
 let newList = await exercise.find({userId: id}).populate('userId')
  //  res.status(200).json({ message: "Deleted activity", response })
   res.status(200).json( {
    "status": "success",
    "message": "Delete Activity",
    "data" : newList
  })
 } catch (e) {
   console.log(e)
   res.status(404).json({ message: "Activity not found" })
 }


})


// router.route('/updateActivity',authenticateToken).put(async (req,res)=>{
//   const activityName=req.body.actName///getting activity name from request
//   const name=req.body.name
//   const description=req.body.description
//   const type=req.body.type
//   const duration=req.body.duration
//   // { "name":activityName,"key":key,"value":value}
//   const filter={"name":activityName}///setting filter
  
//   const updateDoc = {///setting new2  data 
//     $set: {
//     "name":name,
//     "description":description,
//     "type":type,
//     "duration":duration
//     }
//   }
//   //res.json(updateDoc)

//   await exercise.updateOne(filter, updateDoc).then(()=>{
//     res.status(200).json({ message: "updated activity" })
  
//    }).catch((e)=>{
//     console.log(e)
//     res.status(404).json({ message: "error" })
//    })
   
  
//   })
//Get a user by id

router.put('/updateActivity', authenticateToken ,async (req,res)=>{
  const _id=req.body.id///getting activity name from request
  const id = req.id
  console.log(req.id)
  const activityname=req.body.activityname
  const description=req.body.description
  const duration=req.body.duration
  const date=req.body.date
  // { "name":activityName,"key":key,"value":value}
  const filter={"_id":_id}///setting filter
  
  const updateDoc = {///setting new2  data 
    $set: {
    "activityname":activityname,
    "description":description,
    "duration":duration,
    "date":date
    }
  }
  //res.json(updateDoc)

  await exercise.updateOne(filter, updateDoc).then(async (response)=>{
    console.log(response)

    let newList = await exercise.find({userId: id}).populate('userId')

    res.status(200).json( {
      "status": "success",
      "message": "Activity Updated",
      "data" : newList
    })
  
   }).catch((e)=>{
    const error = {
      "status": "failure", 
      "message": "Activity Update Failed",
      "data": e.message
    }
    console.log(e)
    res.status(400).json(error)
   })
   
  
  });
router.route('/:id', authenticateToken).get(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
    //console.log(user);
    //console.log(req.params.id);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update User By id
router.route('/:id').put(async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.userPassword) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.userPassword = await bcrypt.hash(req.body.userPassword, salt)
      } catch (error) {
        return res.status(404).json(error)

      }
    }
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true });
      res.status(200).json({ message: "Account has been Updated Successfully", user })

    }
    catch (error) {
      return res.status(404).json(error)
    }
  }
  else {
    return res.status(405).json("You can update only your account")
  }

});

//Delete User By id
router.route('/:id').delete(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    else {
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).json({ message: "User has been deleted" });
    }
  }
  catch (error) {
    return res.status(500).json(error)
  }
});

router.route('/username/:userName').delete(async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ userName: req.params.userName });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      return res.status(200).json({ message: "User has been deleted" });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});


module.exports = router
