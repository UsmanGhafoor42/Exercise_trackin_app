import React from "react";
import Sidebar from "./Sidebar";
import Form from "./Form";

const Addactivity = () => {
  return (
    <>
      <Sidebar />
      <div
        style={{ marginTop: "6rem" }}
        className="container outline-border d-flex flex-column justify-content-center  p-3 w-50"
      >
        <h2>Enter Activity Details</h2>
        <hr />
        <Form />
      </div>
    </>
  );
};

export default Addactivity;
