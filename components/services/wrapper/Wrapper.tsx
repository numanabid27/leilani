import React from "react";
import styles from "./wrapper.module.scss";
const Wrapper = ({data}:any) => {
  return (
    <section className={styles.sectionthree}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_image}>
          <img src={data.detail_section.image} alt="" />
        </div>
        <div className={styles.wrapper_text}>
          <div className={styles.content}>
            {/* <span>{data.digital_agency.detail_section.short_heading}</span> */}
            <h3>
              {data.detail_section.heading}
            </h3>
            <p>
             {data.detail_section.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wrapper;
