import React from "react";

const Addactivity = () => {
  return (
    <div
      style={{ marginTop: "4rem" }}
      className="container outline-border d-flex flex-column justify-content-center  p-3 w-50"
    >
      <h2>Enter Activity Details</h2>
      <hr />
      <form>
        <div className="form-group py-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group py-3">
          <label htmlFor="description">Description</label>
          <select className="form-control" id="description">
            <option value="">Select description</option>
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
            placeholder="Enter duration"
          />
        </div>
        <div className="form-group py-3">
          <label htmlFor="datetime">Date & Time</label>
          <input type="datetime-local" className="form-control" id="datetime" />
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addactivity;
