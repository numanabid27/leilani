import { useState } from "react";
import styles from "./services.module.scss";
import { props } from "./Services";
import useDimensions from "@/hooks/use-dimensions";
import Link from "next/link";

const ServicesBox = ({ title, para, url, slug }: props) => {

  const { width } = useDimensions();
  return (
    <>
    <Link href={`/services/${slug}/skills/${url}`} className={styles.services_col}>

        <div className={styles.services_col__heading}>
          <h6>{title}</h6>
        </div>
        <div className={styles.services_col__text}>
          <span>
            {width < 700 ? (
              <>
                <img src="./images/mobile_arrow.png" alt="" />
              </>
            ) : (
              <>
                <img src="./images/arrow.png" alt="" />
              </>
            )}
          </span>
          <p>{sliceText(para,150)}</p>
        </div>
    </Link>
    </>
  );
};

export default ServicesBox;


function sliceText(string:string,limit:number){
  return string.length > limit ? string.slice(0,limit) + "... Read More." : string;
}