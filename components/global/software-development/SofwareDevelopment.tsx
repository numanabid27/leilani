import ServicesBox from "../services/ServicesBox";
import styles from "./softwareDevelopment.module.scss";
import style from "../services/services.module.scss";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import useDimensions from "@/hooks/use-dimensions";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import styl from "../../home/telecommunication/telecom.module.scss";
export type props = {
  title: string;
  para: string;
  url: string;  
  slug: string;  
};
const SofwareDevelopment = () => {
  const { width } = useDimensions();
  const heading = useRef<any>();
  const data = [
    {
      title: "Custom websites",
      url: "custom-websites",
      para: "Our web development service is a catalyst for digital transformation, empowering businesses with visually stunning and highly functional websites.With a deep understanding of user experience and the latest industry trends, we create engaging websites that captivate your audience and drive conversions.",
    },
    {
      title: "Mobile App development",
      url: "mobile-app-development",
      para: "Our skilled developers are proficient in using industry-leading frameworks such as React Native, Flutter, and Xamarin, enabling us to build cross-platform applications with a single codebase, ensuring cost efficiency and faster development cycles. Our expertise extends to incorporating advanced features like geolocation, push notifications, in-app purchases, and augmented reality, enhancing the functionality and interactivity of the mobile apps",
    },
    {
      title: "E-Commerce Websites",
      url: "ecommerce-websites",
      para: "We employ popular E-commerce platforms like WooCommerce, Shopify, and Magento to build dynamic and scalable websites tailored to your specific business needs. Our skilled developers harness the power of responsive web design, using HTML5, CSS3, and JavaScript frameworks, such as React or Angular, to create visually stunning and user-friendly interfaces that adapt flawlessly to mobile devices.",
    },
    {
      title: "Wordpress Customization",
      url: 'wordpress-customization',
      para: "Whether it's creating custom designs, integrating third-party APIs, optimizing site speed, or implementing e-commerce functionality, our team leverages their expertise to deliver a customized WordPress solution that perfectly suits your needs",
    },
    {
      title: "Game Development",
      url: "game-development",
      para: "By leveraging programming languages such as C#, C++, or JavaScript, we ensure optimal performance and functionality. Our game development process encompasses concept ideation, prototyping, asset creation, level design, coding, and testing, ensuring a comprehensive and polished final product.",
    },
    {
      title: "SEO",
      url: "seo",
      para: "Our SEO experts employ industry-leading tools like Google Analytics, Moz, SEMrush, and Ahrefs to perform in-depth keyword research, analyze website performance, track rankings, and monitor competition. We utilize these insights to develop a tailored SEO strategy that includes on-page optimization, content creation, link building, and technical SEO enhancements.",
    },
  ];
  useEffect(() => {
    if(width > 700 && heading.current){
        gsap.to(heading.current, {
          scrollTrigger: {
            trigger: heading.current,
            scrub: 1,
            markers: false,
          },
          x: 24 ,
          duration: 1,
        });
    }
  }, [heading.current]);

  return (
    <>
      <section className={styles.software_sec}>
        <div className={styles.software_text}>
          <p>WHAT WE DO?</p>
        </div>
        <div className={styles.software_row}>
          <div className={styles.software_col}>
            <h2>Digital Agency</h2>
          </div>
          <div className={styles.software_col}>
            <img src="./images/home-phones1.png" alt="" />
          </div>
          <div className={styles.software_col + " software_col2"}>
            <p ref={heading}>
              Our focus extends to shaping people&apos;s perspective by
              providing quality software design and development driven by
              limitless potential of innovation.
            </p>
            <div
              className={styl.communication_btn}
              style={{ justifyContent: "center" }}
            >
              <Link href="#">
                <label>WHAT WE DO?</label>
                <span>
                  <BsArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className={style.service_row}>
        {data.map(({ title, para, url }: any, i: number) => {
          return <ServicesBox title={title} para={para} url = {url} slug="digital-agency"  key={i.toString()} />;
        })}
      </div>
    </>
  );
};

export default SofwareDevelopment;
