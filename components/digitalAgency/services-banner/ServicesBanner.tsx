import React from "react";
import style from "./ServicesBanner.module.scss";
const ServicesBanner = ({skill}:any) => { 
  return (
    <div className={style.container}>
      <h1>{skill?.main_heading}</h1>
      <span>{skill?.short_heading}</span>
      <div className={style.overlay}>
        <div className={style.main}>
          <img src={skill?.hero_image} alt="" />
          <div className={style.paragraph}>
            <p>
              {skill?.descriptions[0]}
            </p>
            <p>
            {skill?.descriptions[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
