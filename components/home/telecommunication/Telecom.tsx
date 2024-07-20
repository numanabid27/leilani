import Link from "next/link";
import styles from "./telecom.module.scss";
import { BsArrowRight } from "react-icons/bs";
import Services from "@/components/global/services/Services";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import useDimensions from "@/hooks/use-dimensions";

gsap.registerPlugin(ScrollTrigger);

const Telecom = () => {
  const { width } = useDimensions();
  const heading = useRef<any>();
  const headingline = useRef<any>();
  const communicationline = useRef<any>();
  useEffect(() => {
    if(heading.current){
      gsap.to(heading.current, {
        scrollTrigger: {
          trigger: heading.current,
          scrub: 1,
          markers: false,
        },
        x: width < 800 ? 140 : 100,
        duration: 1,
      });
    }
    
    if(headingline.current){
      gsap.to(headingline.current, {
        scrollTrigger: {
          trigger: headingline.current,
          scrub: 1,
          markers: false,
        },
        width: width < 1100 ? "110px" : "100px",
        duration: 1,
      });
    }
    
    if(communicationline.current){
      gsap.to(communicationline.current, {
        scrollTrigger: {
          trigger: communicationline.current,
          scrub: 1,
          markers: false,
        },
        x: -50,
        duration: 1,
      });
    }
  }, []);

  return (
    <>
      <section className={styles.telecom_sec}>
        <div className={styles.telecom_text}>
          <p>WHAT WE DO?</p>

          <div className={styles.telecom_text__inner}>
            <h6 ref={heading}>
              {width &&
                width >= 700 &&
                " Our tele marketing agency offers a range of services designed to boost your business's growth and maximize customer engagement."}
            </h6>
          </div>
        </div>
        <div className={styles.telecom_heading}>
          { width < 700 ? 
            <>
              <h2>
                tele<span ref={headingline}></span>
              </h2>
              <h2 ref={communicationline}>communication</h2>
            </>
           : <>
            <h2>
              tele <span ref={headingline}></span>communication 
            </h2>
            </>}
          <img src="./images/giphy1.png" />
          
        </div>
        <p style={{display:width < 700 ? "block" : "none", paddingTop:"95px"}}>A modern, one-stop decentralized agency focused on creating the future A modern, one-stop decentralized agency focused on creating the future </p>
          <div className={styles.communication_btn}>
            <Link href="#">
              <label>WHAT WE DO?</label>
              <span>
                <BsArrowRight />
              </span>
            </Link>
          </div>
      </section>
      <Services />
    </>
  );
};

export default Telecom;
