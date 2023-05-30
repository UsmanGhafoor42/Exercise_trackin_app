import React, { useState } from "react";
import EditModal from "./EditModal";

const Table = () => {
  const exerciseData = [
    {
      id: 1,
      username: "Mark",
      activity: "Cycling",
      duration: "20 min",
      date: "20-4-2022",
    },
    {
      id: 2,
      username: "Usman",
      activity: "Swimming",
      duration: "25 min",
      date: "20-5-2022",
    },
    {
      id: 3,
      username: "Bunty",
      activity: "Walking",
      duration: "30 min",
      date: "25-4-2022",
    },
  ];
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditModalOpen(false);
  };
  return (
    <>
      <table class="table table-hover table-secondary mb-5">
        <thead>
          <tr>
            <th scope="col">S no</th>
            <th scope="col">Username</th>
            <th scope="col">Activity</th>
            <th scope="col">Duration</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {exerciseData.map((exercise) => (
            <tr key={exercise.id}>
              <th scope="row">{exercise.id}</th>
              <td>{exercise.username}</td>
              <td>{exercise.activity}</td>
              <td>{exercise.duration}</td>
              <td>{exercise.date}</td>
              <td>
                <button className="btn btn-secondary" onClick={handleEditClick}>
                  Edit
                </button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
          <EditModal open={isEditModalOpen} handleClose={handleCloseModal} />
        </tbody>
      </table>
    </>
  );
};

export default Table;
