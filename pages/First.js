import React, { useState } from "react";
import Sidebar from "@/Components/Sidebar";
import Login from "@/Components/Login";

const First = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <div className="main absolute top-[20%] left-[40%]">
          <div>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
