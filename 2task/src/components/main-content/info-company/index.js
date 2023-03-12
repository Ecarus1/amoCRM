import React from "react";

import Button from "../../elements/button";

import "./style.css";
import "./media.css";

function InfoCompany() {
  return (
    <div className="info-company">
      <h2 className="info-company__title">Вместе с <span className="info-company__grad">бесплатной</span> <span className="info-company__grad">консультацией</span> мы дарим:</h2>

      <div className="company-grid__grid">
        <div className="company-grid__item">
          <span className="company-grid__title"></span>
          <p className="company-grid__text">30 готовых решений</p>
        </div>

        <div className="company-grid__item">
          <span className="company-grid__title"></span>
          <p className="company-grid__text">с показателями вашего бизнеса</p>
        </div>

        <div className="company-grid__item">
          <span className="company-grid__title"></span>
          <p className="company-grid__text">отдела продаж и CRM системы</p>
        </div>

        <div className="company-grid__item">
          <span className="company-grid__title"></span>
          <p className="company-grid__text">использования CRM</p>
        </div>
      </div>

      <div className="info-company__btn">
        <Button type="button" title="Получить консультацию" callback={() => {}}/>
      </div>
    </div>
  );
}

export default React.memo(InfoCompany);