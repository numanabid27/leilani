import React from "react";
import style from "./craftingSteps.module.scss";
import CraftingSteps from "./CraftingSteps";

const Box = ({data}:any) => {
 console.log(data)
  return (
    <>
      <div className={style.container}>
       
        <div className={style.overlay}>
          {data?.crafting_steps_section.map(({ title, description}:any, i:number) => {
            return (
              <CraftingSteps
                key={i.toString()}
                counter={i+1}
                title={title}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Box;
