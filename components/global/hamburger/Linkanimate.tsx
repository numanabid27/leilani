import { useState } from "react";
import { props } from "./Hamburger";
import hamburger from "./hamburger.module.scss";
import useDimensions from "@/hooks/use-dimensions";
import Link from "next/link";


const Linkanimate = ({ url, serialNum, listName }: props) => {
  const {width} = useDimensions();
  return (
    <li>
      <Link
        href={url}
        className={hamburger.link_list}
      >
        <p
        >
          <span>{serialNum}</span>
          {listName}
        </p>
        <img src="./images/right_icon.png" alt="" 
          style={{display:width < 700 ? "none" : "block"}}
        />
      </Link>
    </li>
  );
};

export default Linkanimate;
