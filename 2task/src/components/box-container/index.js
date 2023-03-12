import React from "react";

import "./style.css";
import "./media.css";

function BoxContainer({children}) {
  return (
    <div className="container">
      <div className="container__box">
        <div className="container__content">
          {children}
        </div>

        <div className="container__light container__red"></div>
        <div className="container__light container__purple"></div>
        <div className="container__light container__yellow"></div>

        <div className="container__ball red__big"></div>
        <div className="container__ball red__small"></div>
        <div className="container__ball purple__big"></div>

        <div className="container__glass"></div>
        <div className="container__nois"></div>
      </div>
    </div>
  );
}

export default React.memo(BoxContainer);