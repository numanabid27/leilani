import ServiceBanner from "@/components/services/banner/serviceBanner";
import ClinetsFeatures from "@/components/services/clients-featured/ClinetsFeatures";
import HeroBanner from "@/components/services/hero-sec/HeroBanner";
import Wrapper from "@/components/services/wrapper/Wrapper";
import Head from "next/head";
import data from "../../../data/services.json"
const services = () => {

  return (
    <>
    <Head>
        <title>Tele communication</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/leilani_favicon.ico" />
      </Head>
      <main>
        <HeroBanner data={data.tele_communication}/>
        <ServiceBanner slug = "tele-communication" data = {data.tele_communication.hero_section.services}/>
        <Wrapper data = {data.tele_communication}/>
        <ClinetsFeatures />
      </main>
   </>
  )
}

export default services