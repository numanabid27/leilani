import Link from "next/link";
import Linkanimate from "./Linkanimate";
import hamburger from "./hamburger.module.scss";
import { useEffect, useState, useRef } from "react";
import useDimensions from "@/hooks/use-dimensions";
import { useRouter } from "next/router";

export type props = {
  serialNum: string;
  listName: string;
  url: string;
};


const Hamburger = () => {
  const { width } = useDimensions();
  const list = [
    {
      serialNum: "01",
      listName: "Blog",
      url: "#",
    },
    {
      serialNum: "02",
      listName: "Digital Agency",
      url: "/services/digital-agency",
    },
    {
      serialNum: "03",
      listName: "Tele-communication",
      url: "/services/tele-communication",
    },
    
  ];
  const [isHide, setIsHide] = useState(false);
  const [isScroll, setIsScroll] = useState<any>(false);
  const myElementRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
          setIsScroll(true);
        } else {
          setIsScroll(false);
        }
      });
    }
  }, []);
  const router = useRouter();
  const handleToggle = () => {
    setIsHide(!isHide);

  };

  // close menu when page is change
  useEffect(()=>{
    setIsHide(false);
  },[router.pathname])
  
  
  return (
    <>
      {width <= 700 ? (
        <Mobile handleToggle={handleToggle} isHide={isHide} />
      ) : (
        <Desktop
          isScroll={isScroll}
          myElementRef={myElementRef}
          handleToggle={handleToggle}
          isHide={isHide}
        />
      )}
      <Menu list={list} isHide={isHide} />
    </>
  );
};

export default Hamburger;

const Mobile = ({ handleToggle, isHide }: any) => {
  return (
    <button className={hamburger.humburger_icon} onClick={handleToggle} style={{backgroundColor : isHide ? "#FAFF00" : "#fff"}}>
      <span
        style={{
          transform: isHide ? "translateY(9px) rotate(45deg)" : "",
        }}
      ></span>
      <span
        style={{
          transform: isHide ? "translate(34px)" : "",
        }}
      ></span>
      <span
        style={{
          transform: isHide ? "translateY(-9px) rotate(-45deg)" : "",
        }}
      ></span>
    </button>
  );
};
const Desktop = ({ isScroll, myElementRef, handleToggle, isHide }: any) => {
  return (
    <button
      className={hamburger.humburger_icon}
      style={{
        transform: isScroll ? "translateY(0px)" : "translateY(-165px)",
        backgroundColor : isHide ? "#FAFF00" : "#fff"
      }}
      ref={myElementRef}
      onClick={handleToggle}
    >
      <span
        style={{
          transform: isHide ? "translateY(9px) rotate(45deg)" : "",
        }}
      ></span>
      <span
        style={{
          transform: isHide ? "translate(34px)" : "",
        }}
      ></span>
      <span
        style={{
          transform: isHide ? "translateY(-9px) rotate(-45deg)" : "",
        }}
      ></span>
    </button>
  );
};
const Menu = ({ list, isHide }: any) => {
  return (
    <div
      className={`${hamburger.humburger_Bg} `}
      style={{
        transition: "all .5s",
        transform: !isHide ? "translateY(-115%)" : "translateY(0)",
        opacity: !isHide ? "0" : "1",
      }}
    >
      <div className={hamburger.humburger_logo}>
        <Link href="#">LEILANI</Link>
      </div>
      <ul className={hamburger.humburger_list}>
        {list.map(({ serialNum, listName, url }: props, i: number) => {
          return (
            <Linkanimate
              key={i.toString()}
              serialNum={serialNum}
              listName={listName}
              url={url}
            />
          );
        })}
      </ul>
      <div className={hamburger.social_icon}>
        <a href="#">
          <img src="./images/instaa.png" alt="" />
        </a>
        <a href="#">
          <img src="./images/fbb.png" alt="" />
        </a>
        <a href="#">
          <img src="./images/ln.png" alt="" />
        </a>
      </div>
    </div>
  );
};
