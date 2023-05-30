import React, { useState } from "react";
import EditModal from "./EditModal";
import swal from 'sweetalert';
import axios from "axios";
import axiosInstance from "../../axiosConfig";
import { useEffect } from "react";


const Card = () => {
  const [post, setPost] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState([]);
  React.useEffect(() => {
      allData()
    }, []);
  
    let allData = async () => {
      try {
        const { data } = await axiosInstance.get('http://127.0.0.1:3000/api/users/activities')
        setPost(data);
        console.log(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    console.log('current ' ,selectedExercise);
    console.log(post)
  // const exercises = [
  //   {
  //     icon: "fa fa-bicycle fa-3x mb-3",
  //     title: "Cycling",
  //     duration: "Duration: 1 hour",
  //   },
  //   {
  //     icon: "fa fa-walking fa-3x mb-3",
  //     title: "Walking",
  //     duration: "Duration: 45 minutes",
  //   },
  //   {
  //     icon: "fa fa-hiking fa-3x mb-3",
  //     title: "Hiking",
  //     duration: "Duration: 30 minutes",
  //   },
  //   {
  //     icon: "fa fa-swimmer fa-3x mb-3",
  //     title: "Swimming",
  //     duration: "Duration: 15 minutes",
  //   },
  //   {
  //     icon: "fa fa-running fa-3x mb-3",
  //     title: "Running",
  //     duration: "Duration: 25 minutes",
  //   },
  //   {
  //     icon: "fa fa-motorcycle fa-3x mb-3",
  //     title: "Riding",
  //     duration: "Duration: 35 minutes",
  //   },
  // ];

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isPreviewModalOpen, setPreviewModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    activity: "",
    duration: "",
  });
  const handleEditClick = (exercise) => {
    setSelectedExercise(exercise);
    setEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditModalOpen(false);
  };
  // const deleteData = async (exercise) => {
  //   try {
  //     const token = localStorage.getItem('accessToken'); // Replace with your actual authorization token
  //     const targetId = express._id; // Replace with the ID of the activity to delete

  //     const response = await axios.delete('/removeActivity', {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       },
  //       data: {
  //         targetId: targetId
  //       }
  //     });

  //     setMessage(response.data.message);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const handleDelete = async (exercise) => {
    console.log(exercise._id);
    // const body={targetId:exercise._id};
    
    try {
      const accessToken = localStorage.getItem('accessToken');
      const { data } = await axios.delete(`http://localhost:3000/api/users/removeActivity/${exercise?._id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      console.log(data.data);
      setPost(data.data)
      // location.replace('/exercise')
    } catch (e) {
      alert(e);
    }
    swal({
      title: 'Deleted Activity!',
      text: "Your item has been deleted!'",
      icon: 'success',
      button: 'ok!',
    });
  }
  return (
    <>
      {post.map((exercise, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          <div className="card mb-3">
            <div className="card-body text-center">
              <h2 className="card-title">Activity Name:{exercise.activityname}</h2>
              <h5 className="card-txt">Type:{exercise.description}</h5>
              <p className="card-text">Duration:{exercise.duration}</p>
              <p className="card-text">Date:{exercise.date}</p>
              <button className="btn btn-secondary" onClick={()=> handleEditClick(exercise)}>
                Edit
              </button>
              <button className="btn btn-primary" onClick={()=> handleDelete(exercise)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
      <EditModal open={isEditModalOpen} handleClose={handleCloseModal} selectedExercise={selectedExercise} setPost = {setPost}/>
    </>
  );
};

export default Card;
