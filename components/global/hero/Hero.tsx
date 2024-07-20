import { ParallaxBanner } from "react-scroll-parallax";
import style from "./hero.module.scss";
const Hero = () => {
  return (
    <ParallaxBanner
      layers={[{ image: "/images/hero.png", speed: -15 }]}
      className={style.demo + " aspect-[2/1]"}
    />
  );
};

export default Hero;
