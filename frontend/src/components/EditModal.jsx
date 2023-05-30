import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axiosInstance from "../../axiosConfig";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";

const EditModal = ({ open, handleClose,selectedExercise,setPost  }) => {


  const [id, setid] = useState('')
  const [activityname, setactivityname] = useState('')
  const [description, setdescription] = useState('')
  const [duration, setduration] = useState('')
  const [date, setdate] = useState('')
  React.useEffect(() => {
    selectedExercise ?  
    setid(selectedExercise._id) : ""
    selectedExercise ?  
    setactivityname(selectedExercise.activityname) : ""

    selectedExercise ?  
    setdescription(selectedExercise.description) : ""

    selectedExercise ?  
    setduration(selectedExercise.duration) : ""
    selectedExercise ?  
    setdate(selectedExercise.date) : ""
    //   allData()
    }, [selectedExercise]);
  
    // let allData = async () => {
    //   try {
    //     const { data } = await axiosInstance.get('http://127.0.0.1:3000/api/users/activities')
    //     setPost(data);
    //     console.log(data)
    //   } catch (error) {
    //     console.log(error.message)
    //   }
    // }
    console.log('from modal',id);
  const handleSubmit = (event) => {
    event.preventDefault();
    update()
    // Add your form submission logic here
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const update=()=>{
    const UpdateToDb = async () => {
      console.log("Hello")
          const body = {id, activityname, description, duration, date };
      try {
        const { data }  = await axiosInstance.put(`http://127.0.0.1:3000/api/users/updateActivity/`, body);
        console.log(data.data);
        setPost(data.data)
      } catch (e) {
        alert(e);
      }
  
      handleClose(false);
      
    };
    UpdateToDb()
    }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h6" component="h2" id="modal-modal-title">
          Edit Activity
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="activityname"
            label="Activityname"
            variant="outlined"
            margin="normal"
            fullWidth
            value={activityname}
            onChange={(e)=>{setactivityname(e.target.value)}}
          />
          <TextField
            id="activity"
            label="Activity"
            variant="outlined"
            margin="normal"
            value={description}
            onChange={(e)=>{setdescription(e.target.value)}}
            fullWidth
          />
          <TextField
            id="duration"
            label="Duration"
            value={duration}
            onChange={(e)=>{setduration(e.target.value)}}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            type="datetime-local" className="form-control" id="date"
            variant="outlined"
            value={date}
            onChange={(e)=>{setdate(e.target.value)}}
            margin="normal"
            fullWidth
          />
          
         
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default EditModal;
