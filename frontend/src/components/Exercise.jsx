import React from "react";
import Card from "./Card";
import Table from "./Table";
import Sidebar from "./Sidebar";
import Formmodal from "./EditModal";

const Exercise = () => {
  return (
    <>
      <div style={{ marginTop: "6rem" }} className="container">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10 row">
            <Card />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Exercise;
