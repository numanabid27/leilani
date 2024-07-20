import Story from "@/components/global/story/Story";
import styles from "./ourStory.module.scss";

const OutStory = () => {
  return (
    <section className={styles.story_sec}>
      <div className={styles.story_text}>
        <p>WHO WE ARE</p>
      </div>
      <div className={styles.story_row}>
        <h2>Our Story</h2>
        <div className={styles.story_paragraph}>
          <p>
            We are a dynamic team of highly skilled professionals who excel in
            delivering exceptional solutions to our clients. With a deep
            understanding of the ever-evolving digital landscape, we harness
            cutting-edge technologies to craft customized software and tele
            marketing strategies that drive results. Our commitment to
            excellence, coupled with our client-centric approach, enables us to
            build long-lasting partnerships and consistently exceed
            expectations. Whether it&apos;s developing innovative software solutions
            or executing impactful tele marketing campaigns, we are passionate
            about helping businesses thrive in the digital age.
          </p>
          <p>
            Our agency is fueled by a passion for innovation and a relentless
            pursuit of excellence. We stay ahead of the curve by constantly
            staying abreast of the latest industry trends and emerging
            technologies. Our team of experts is committed to continuous
            learning and professional development, ensuring that we offer the
            most up-to-date and effective strategies to our clients.
          </p>
        </div>
      </div>
      <Story />
    </section>
  );
};

export default OutStory;
