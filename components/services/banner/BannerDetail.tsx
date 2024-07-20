import React from "react";
import styles from "./banner.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
type props = {
  title: string;
  description: string;
  url: string;
  counter:number;
  query:any,
  slug:any
};

const Bannerdetail = ({ title, description, url,counter,query, slug}: props) => {
  const router = useRouter();
  
  return (
    <Link href={`/services/${slug}/skills/${url}`} className={styles.card}>
      <div>
        <h4>0{counter}</h4>

        <div className={styles.inner_card}>
          <h2>{title}</h2>
        </div>

        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Bannerdetail;
