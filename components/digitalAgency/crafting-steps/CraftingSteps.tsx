import React from "react";
import style from "./craftingSteps.module.scss";

type props = {
  title: string;
  description: string;
  counter:any

};

const CraftingSteps = ({ title, description,counter }: props) => {
  return (
    <div className={style.card}>
      <h4>0{counter}</h4>

      <div className={style.inner_card}>
        {/* <img src={image} alt="" /> */}
        <h2>{title}</h2>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default CraftingSteps;
