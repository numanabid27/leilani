import styles from "./heroBanner.module.scss";

const HeroBanner = ({data}: any) => { 
  console.log("hello...",data.hero_section.main_heading)
  return (
    <div className={styles.section_one}>
      <div className={styles.hero_text}>
        <h2>{data.hero_section.main_heading}</h2>
        <span> {data.hero_section.short_heading}</span>
      </div>

      <div className={styles.hero_image}>
        <div className={styles.image}>
          <img src="/images/Rectangle61.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
