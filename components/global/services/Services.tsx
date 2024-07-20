import ServicesBox from "./ServicesBox";
import styles from "./services.module.scss";
export type props = {
  title: string;
  para: string;
  url: string;
  slug?:any;
};
const Services = () => {
  const data = [
    {
      title: "In-bound Calls",
      url: "in-bound-calls",
      para: "From answering customer inquiries and processing orders to resolving issues and providing technical support, our goal is to deliver outstanding customer experiences at every interaction. With robust call routing systems and cutting-edge technology, we ensure minimal wait times and maximize customer satisfaction.",
    },
    {
      title: "Out-bound Calls",
      url: "out-bound-calls",
      para: "Through personalized and persuasive interactions, we build meaningful connections with your target audience, capturing their interest and fostering trust in your brand. With a focus on maximizing productivity and efficiency, we employ advanced call routing technology and data-driven strategies to optimize each call, ensuring the highest possible success rate.",
    },
    {
      title: "Chat Support",
      url: "chat-support",
      para: "With a highly skilled and dedicated team, we deliver exceptional support through chat interactions, ensuring a seamless and personalized experience for every customer. Our agents are trained to handle diverse inquiries with professionalism and efficiency, offering expert guidance and assistance in a friendly and engaging manner.",
    },
    {
      title: "Email Support",
      url: "email-support",
      para: "Our email support service is a pinnacle of efficiency and customer satisfaction, offering timely and personalized assistance to resolve inquiries and provide comprehensive solutions. With a dedicated team of experienced professionals, we prioritize responsiveness and attentiveness, ensuring that every email is handled with care and expertise.",
    },
    {
      title: "Market Survey",
      url: "market-survey",
      para: "With a meticulous approach, we collect and analyze data, providing you with actionable insights that drive informed business decisions. Our team of experienced researchers utilizes a combination of qualitative and quantitative methods, ensuring accurate and reliable results.",
    },
    {
      title: "Omni Channel",
      url: "omni-channel",
      para: "With our innovative technology and integrated approach, we enable businesses to deliver a consistent and personalized experience regardless of the channel used - whether it's through websites, mobile apps, social media, or physical stores.",
    },
  ];
  return (
    <>
      <div className={styles.service_row}>
        {data.map(({ title, para, url }: props, i:number) => {
          return <ServicesBox title={title} para={para} url = {url} slug = "tele-communication" key={i.toString()}/>;
        })}
      </div>
    </>
  );
};

export default Services;
