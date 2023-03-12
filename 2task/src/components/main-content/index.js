import React from "react";

import BoxCompany from "./box-company";
import InfoCompany from "./info-company";

import "./style.css";
import "./media.css";

function MainContent() {
  return (
    <div className="main-content">
      <BoxCompany/>
      <InfoCompany/>
    </div>
  );
}

export default React.memo(MainContent);