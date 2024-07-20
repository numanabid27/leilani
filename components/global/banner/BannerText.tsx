import banner from "./banner.module.scss";

const BannerText = () => {
  return (
    <section className={banner.banner_sec}>
      <div className={banner.banner_text}>
        <h1>
          Your Ideas, <br /> Our Expertise
        </h1>
        <p>- turning visions into reality.</p>
      </div>
      <div className={banner.right_text}>
        <p>
          Our dedication to delivering measurable results and exceptional
          customer service sets us apart as a trusted partner in the software
          and tele marketing landscape.
        </p>
      </div>
    </section>
  );
};

export default BannerText;
