import React from "react";

const Exercise = () => {
  const exercises = [
    {
      icon: "fa fa-bicycle fa-3x mb-3",
      title: "Cycling",
      duration: "Duration: 1 hour",
    },
    {
      icon: "fa fa-walking fa-3x mb-3",
      title: "Walking",
      duration: "Duration: 45 minutes",
    },
    {
      icon: "fa fa-hiking fa-3x mb-3",
      title: "Hiking",
      duration: "Duration: 30 minutes",
    },
    {
      icon: "fa fa-swimmer fa-3x mb-3",
      title: "Swimming",
      duration: "Duration: 15 minutes",
    },
    {
      icon: "fa fa-running fa-3x mb-3",
      title: "Running",
      duration: "Duration: 25 minutes",
    },
    {
      icon: "fa fa-motorcycle fa-3x mb-3",
      title: "Riding",
      duration: "Duration: 35 minutes",
    },
  ];

  const exerciseData = [
    {
      id: 1,
      username: "Mark",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      duration: "20 min",
      date: "20-4-2022",
    },
    {
      id: 2,
      username: "Usman",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      duration: "25 min",
      date: "20-5-2022",
    },
    {
      id: 3,
      username: "Bunty",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      duration: "30 min",
      date: "25-4-2022",
    },
  ];
  return (
    <div style={{ marginTop: "4rem" }} className="container">
      <div className="row">
        {exercises.map((exercise, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="card mb-3">
              <div className="card-body text-center">
                <i className={exercise.icon}></i>
                <h5 className="card-title">{exercise.title}</h5>
                <p className="card-text">{exercise.duration}</p>
                <button className="btn btn-dark">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <table class="table table-hover table-secondary mb-5">
        <thead>
          <tr>
            <th scope="col">S no</th>
            <th scope="col">Username</th>
            <th scope="col">Description</th>
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
              <td>{exercise.description}</td>
              <td>{exercise.duration}</td>
              <td>{exercise.date}</td>
              <td>
                <button className="btn btn-secondary">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exercise;
