import { ParallaxBanner } from "react-scroll-parallax";
import styles from "./story.module.scss";
const Story = () => {
  return (
    <>
      <div className={styles.story_row + " storty_Row"}>
        <div className={styles.story_col}>
          <ParallaxBanner
            layers={[{ image: "/images/story-1.png", speed: -15 }]}
            className={styles.story_img + " aspect-[2/1]"}
          />
        </div>
        <div className={styles.story_col}>
          <ParallaxBanner
            layers={[{ image: "/images/lab.png", speed: -15 }]}
            className={styles.story_img2 + " aspect-[2/1]"}
          />
        </div>
        <div className={styles.story_col}>
          <ParallaxBanner
            layers={[{ image: "/images/story-4.png ", speed: -15 }]}
            className={styles.story_img3 + " aspect-[2/1]"}
          />
          <ParallaxBanner
            layers={[{ image: "/images/story-3.png ", speed: -15 }]}
            className={styles.story_img4 + " aspect-[2/1]"}
          />
        </div>
      </div>
    </>
  );
};

export default Story;
