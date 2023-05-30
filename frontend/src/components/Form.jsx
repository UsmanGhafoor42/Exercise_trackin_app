import React, { useState } from 'react'
// import axios from 'axios'
import { useForm } from "react-hook-form";
import axiosInstance from '../../axiosConfig'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [activityname, setactivityname] = useState('')
  const [description, setdescription] = useState('')
  const [duration, setduration] = useState('')
  const [date, setdate] = useState('')
  const changehandler=()=>{
    console.log({activityname, description, duration, date });
      saveToDb()
      
    }
    const saveToDb = async () => {
    
      const body = { activityname, description, duration, date };
      try {
        const res = await axiosInstance.post(
          "http://127.0.0.1:3000/api/users/createActivity",
          body
        );
        alert("Activity Created")
        location.replace("/exercise");
      } catch (e) {
        alert(e)
  
      }
  
    
  };


  const validateDateTime = (value) => {
    const selectedDate = new Date(value);
    const currentDate = new Date();
    const nextYear = new Date(currentDate.getFullYear() + 1, 0, 1); // Get the first day of next year

    if (!value) {
      return "Date & Time is required";
    } else if (selectedDate < currentDate) {
      return "Please select a future date";
    } else if (selectedDate > nextYear) {
      return "Please select a date within the next year";
    }

    return true;
  };

  const currentDate = new Date().toISOString().slice(0, 16); // Get current date and time in the format "YYYY-MM-DDTHH:mm"
  const nextYear = new Date(new Date().getFullYear() + 1, 0, 1)
    .toISOString()
    .slice(0, 16); // Get the first day of next year
  return (
    <>
      <form>
        <div className="form-group py-3">
          <label htmlFor="username">Activity Name</label>
          <input
            type="text"
            className="form-control"
            value={activityname}
            onChange={(e)=>{setactivityname(e.target.value)}}
            id="activityname"
            placeholder="Enter Activity name"
          />
        </div>
        <div className="form-group py-3">
          <label htmlFor="activity">Activity</label>
          <select className="form-control" id="activity" value={description}
          onChange={(e)=>{setdescription(e.target.value)}}>
            <option value="">Select activity</option>
            <option value="Cycle">Cycle</option>
            <option value="Walk">Walk</option>
            <option value="Hike">Hike</option>
            <option value="Swim">Swim</option>
            <option value="Run">Run</option>
            <option value="Ride">Ride</option>
          </select>
        </div>
        <div className="form-group py-3">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            className="form-control"
            id="duration"
            value={duration}
            onChange={(e)=>{setduration(e.target.value)}}
            placeholder="Enter duration"
          />
        </div>
        <div className="form-group py-3">
          <label htmlFor="datetime">Date & Time</label>
          <input type="datetime-local" className="form-control" id="date" value={date}
          {...register("datetime", {
            required: "Date & Time is requuired",
            validate: validateDateTime,
          })}
          min={currentDate}
            max={nextYear}
            onChange={(e)=>{setdate(e.target.value)}}/>
        </div>
        <button onClick={changehandler}  className="btn btn-secondary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form