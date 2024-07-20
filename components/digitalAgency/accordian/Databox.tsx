import React from "react";
import style from "./Accordian.module.scss";


type t_TabBox = {
  text: string;
  heading: string;
  active: boolean;
  handleOnClick: () => void;
};
const Databox = ({ text, heading, active, handleOnClick }: t_TabBox) => {
  
  return (
    <>
      <div className={style.tab}>
        <div className={style.bar} onClick={handleOnClick}>
          <h3 className="para__primary ">{heading}</h3>
          <span>{active ? "-" : "+"}</span>
        </div>
        <div
          className={style.content}
       
        >
          <p className={active ? "service_faq" : "service_faq__none"}>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Databox;
