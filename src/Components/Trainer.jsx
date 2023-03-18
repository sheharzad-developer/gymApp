import React from "react";
import Trainerbox from "./Trainerbox";
import t1 from "../images/t1.jpg";
import t2 from "../images/t2.jpg";
import t3 from "../images/t3.jpg";
// import t4 from "../images/t4.jpg";

function Trainer() {
  return (
    <div id="trainer">
      <div className="trainer-text">
        <h1>TRAINER</h1>
        <div className="t-container">
          <Trainerbox image={t1} title="Usama Talat" />
          <Trainerbox image={t2} title="Amna Cheema" />
          <Trainerbox image={t3} title="Ammad Mir" />
          <Trainerbox image={t3} title="Ammad Mir" />
        </div>
      </div>
    </div>
  );
}

export default Trainer;
