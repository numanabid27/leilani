import React from "react";
import style from "./Steps.module.scss";
const Steps = ({data}:any) => {
  console.log(data)
  return (
    <div className={style.container}>
      <h1>
        4 Steps of <span>Crafting Excellence</span>{" "}
      </h1>
      <div className={style.main}>
        {
          data?.excellence_steps_section?.map(({title, description}:any, i:number)=>{
            return(
              <div className={style.content}>
              <h3>{title}</h3>
              <p>
                {description}
              </p>
            </div>
            ) 
          })
        }
      </div>
    </div>
  );
};

export default Steps;
