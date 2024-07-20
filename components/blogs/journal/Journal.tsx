import React from "react";
import style from "./Journal.module.scss";
import { useRef, useEffect } from "react"
import useDimensions from "@/hooks/use-dimensions";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Journal = () => {
  const {width} = useDimensions();
  const headingline = useRef<any>()
  useEffect(() => {
   if(headingline.current){
    gsap.to(headingline.current, {
      scrollTrigger: {
        trigger: headingline.current,
        scrub: 1,
        markers: false,
      },
      width: "250px",
      duration: 1,
    });
   }
   
   
  }, []);
  return (
    <div className={style.container}>
      <h5>READ OUR BLOGS</h5>
      <h1>
        <span>Read Updated </span><span ref={headingline}></span> <span>Jounral </span>         
      </h1>
      <div  className={style.paragraph}>
      <p>
        A modern, one-stop decentralized agency focused on creating the future A
        modern, one-stop decentralized agency focused on creating the future
      </p>
      </div>
    </div>
  );
};

export default Journal;
