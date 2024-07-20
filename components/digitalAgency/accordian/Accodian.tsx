import React, { useState } from "react";
import style from "./Accordian.module.scss";
import Databox from "./Databox";
const Accodian = () => {
  const [activeTab, setActiveTab] = useState<boolean | number>(false);
  const data = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis deserunt necessitatibus ea totam explicabo quibusdam eum facilis neque asperiores possimus?",
      heading: "What is 5G, and how wil it infulence our lives?",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis deserunt necessitatibus ea totam explicabo quibusdam eum facilis neque asperiores possimus?",
      heading: "What is 5G, and how wil it infulence our lives?",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis deserunt necessitatibus ea totam explicabo quibusdam eum facilis neque asperiores possimus?",
      heading: "What is 5G, and how wil it infulence our lives?",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis deserunt necessitatibus ea totam explicabo quibusdam eum facilis neque asperiores possimus?",
      heading: "What is 5G, and how wil it infulence our lives?",
    },
  ];
  
  return (
    <div className={style.container}>
      <img src="/images/accordian-img.png" alt="" />
      <div className={style.main}>
        <h1>Product making for friendly users</h1>
        <h6>
          From initial concept, to interface design and full stack development
          we create user-centered digital products that improve people’s lives
          leveraging the power of technology and high-end design.From initial
          concept, to interface design and full stack development we create
          user-centered digital products that improve people’s lives leveraging
          the power of technology and high-end
        </h6>
        {data.map(({ text, heading }: any, i: number) => {
          return (
            <Databox
              key={i.toString()}
              text={text}
              heading={heading}
              active={activeTab === i ? true : false}
              handleOnClick={() => {
                if (activeTab !== i) {
                  return setActiveTab(i);
                }
                setActiveTab(false);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Accodian;
