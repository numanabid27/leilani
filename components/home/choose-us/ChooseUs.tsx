import styles from "./chooseUs.module.scss";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import useDimensions from "@/hooks/use-dimensions";

gsap.registerPlugin(ScrollTrigger);

const ChooseUs = () => {
  const {width} = useDimensions();
  useLayoutEffect(() => {
    if(width > 700){
      gsap.set("#Box-1", {
        y: 100,
        x: 100,
      });
      gsap.set("#Box-2", {
        y: 600,
      });
      gsap.set("#Box-3", {
        width:"20vw"
      });
      gsap.set("#Box-4", {
        y: 500,
      });
  
      // Counter
      ScrollTrigger.create({
        id:"counter",
  
      })
  
      // Box 1
      const firstBox_timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#Box-1",
          start: "top top",
          
          scrub: 2,
          // pin:true
        },
      });
      firstBox_timeline.to("#Box-1", {
        y: 1100,
        x: 0,
        height: "fit-content",
        ease: "slow(0.7, 0.7, false)",
      
      });
      gsap.to("#Box-1 img", {
        scrollTrigger: {
          trigger: "#Box-1",
          start: "top top",
          scrub: 2,
        },
        height: 200,
        opacity: 0.3,
        width: "18vw",
        borderRadius: "30px",
        objectFit: "cover",
        ease: "slow(0.7, 0.7, false)",
      });
      // firstBox_timeline.to("#Box-1", {
      //   borderRight: "1px solid white",
      // });
      gsap.to("#Box-1 h1",{
        scrollTrigger: {
          trigger: "#Box-1",
          start: "top top",
          scrub: 2,
        },
        snap: { textContent: 1 },
        textContent:100
      })
  
      // Box 2
      const secondBox_timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#Box-1",
          start: "top top",
          scrub: 1.5,
          // pin:true
        },
      });
      secondBox_timeline.to("#Box-2", {
        y: 1100,
        height: "fit-content",
        ease: "slow(0.7, 0.7, false)",
      });
      gsap.to("#Box-2 img", {
        scrollTrigger: {
          trigger: "#Box-1",
          start: "top top",
          scrub: 1.5,
        },
        height: 200,
        opacity: 0.3,
        width: "18vw",
        borderRadius: "30px",
        objectFit: "cover",
        ease: "slow(0.7, 0.7, false)",
      });
      gsap.to("#Box-2 h1",{
        scrollTrigger: {
          trigger: "#Box-2",
          start: "top top",
          scrub: 2,
        },
        snap: { textContent: 1 },
        textContent:25
      })
  
      // Box 3
      const thirdBox_timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#Box-3",
          start: "top top",
          
          scrub: 2,
          // pin:true
        },
      });
      thirdBox_timeline.to("#Box-3", {
        y: 1100,
        height: "fit-content",
        ease: "slow(0.7, 0.7, false)",
      });
      gsap.to("#Box-3 img", {
        scrollTrigger: {
          trigger: "#Box-3",
          start: "top top",
          scrub: 2,
        },
        height: 200,
        opacity: 0.3,
        width:"18vw",
        borderRadius: "30px",
        objectFit: "cover",
      });
      // thirdBox_timeline.to("#Box-3", {
      //   borderRight: "1px solid white",
      //   borderLeft: "1px solid white",
      // });
      gsap.to("#Box-3 h1",{
        scrollTrigger: {
          trigger: "#Box-3",
          start: "top top",
          scrub: 2,
        },
        snap: { textContent: 1 },
        textContent:70
      })
  
      // Box 4
      const fourthBox_timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#Box-1",
          start: "top top",
          
          scrub: 1.5,
          // pin:true
        },
      });
      fourthBox_timeline.to("#Box-4", {
        y: 1100,
        ease: "slow(0.7, 0.7, false)",
      });
      gsap.to("#Box-4 img", {
        scrollTrigger: {
          trigger: "#Box-1",
          start: "top top",
          
          scrub: 1.5,
        },
        height: 200,
        opacity: 0.3,
        width: "18vw",
        borderRadius: "30px",
        objectFit: "cover",
        ease: "slow(0.7, 0.7, false)",
      });
      gsap.to("#Box-4 h1",{
        scrollTrigger: {
          trigger: "#Box-4",
          start: "top top",
          scrub: 2,
        },
        snap: { textContent: 1 },
        textContent:12
      })
    }
    // setting default values

   

  }, [width]);

  return (
    <>
      <section className={styles.team_sec}>
        <div className={styles.team_sec__inner}>
          <div className={styles.sec_text}>
            <h6>WHY CHOOSE US</h6>
          </div>
          <div className={styles.choose_us}>
            <div className={styles.choose_one} id="boxes-wrapper">
              <ServiceBox
                info={{ count: 9, title: "Clients" }}
                image="./images/project-4.png"
                animationId="Box-1"
              />
              <ServiceBox
                info={{ count: 14, title: "Years in Business" }}
                image="./images/project-2.png"
                animationId="Box-2"
              />
              <ServiceBox
                info={{ count: 7, title: "Projects" }}
                image="./images/project-3.png"
                animationId="Box-3"
              />
              <ServiceBox
                info={{ count: 7, title: "Offices" }}
                image="./images/project-4.png"
                animationId="Box-4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;

const ServiceBox = ({ info, image, animationId }: any) => {
  return (
    <div className={styles.choose_col__inner} id={animationId}>
      <img src={image} alt="" />
      <div className={styles.col_inner_text}>
        <span>+</span>
        <h1>{info.count}</h1>
      </div>
      <p>{info.title}</p>
    </div>
  );
};
