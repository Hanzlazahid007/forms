import React, { useState } from "react";

import Profemp from "@/Components/Profemp";
import Profbar3 from "@/Components/Profbar3";

const First = () => {
  return (
    <div>
      <Profbar3 />
      <div>
        <div className="main absolute top-[5%] left-[32%]">
          <div>
            <Profemp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
