import React from "react";
import footer from "./footer.module.scss";
import Link from "next/link";
import FooterContact from "./FooterContact";

const Footer = () => {
  return (
    <>
      <div className={footer.overview}>
        <div className={footer.container}>
          <div className={footer.main_section}>
            <div className={footer.section1}>
              <Link href=""> LEILANI</Link>
              <b>SOFTWARES</b>
              <p>
              With a focus on collaboration and open communication, we foster a creative and inclusive work environment that encourages ideas to flourish. Our dedication to delivering measurable results and exceptional customer service sets us apart as a trusted partner in the software and tele marketing landscape.
              </p>
              <div className={footer.icon}>
                <a href="https://instagram.com/leilanitech?igshid=MWQ1ZGUxMzBkMA==">
                  
                  <img src="/images/insta.png" alt="#" />
                </a>
                <a href="https://www.facebook.com/leilanitech">
                  
                  <img src="/images/fb.png" alt="#" />
                </a>
                <a href="https://www.linkedin.com/company/leilani-inc/">
                  
                  <img src="/images/linkedin.png" alt="#" />
                </a>
              </div>
            </div>
            <div className={footer.section2}>
              <p>Information</p>
              <ul>
                <li>
                  <Link href="">
                    <span>
                      <img src="/images/group-arrow.png" alt="#" />
                    </span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <span>
                      <img src="/images/group-arrow.png" alt="#" />
                    </span>
                    Services
                  </Link>
                </li>
                <li>
                  
                  <Link href="">
                    <span>
                      <img src="/images/group-arrow.png" alt="#" />
                    </span>
                    Teams
                  </Link>
                </li>
                <li>
                  
                  <Link href="">
                    <span>
                      <img src="/images/group-arrow.png" alt="#" />
                    </span>
                    Portfolio
                  </Link>
                </li>
                <li>
                  
                  <Link href="">
                    <span>
                      <img src="/images/group-arrow.png" alt="#" />
                    </span>
                    Contact us
                  </Link>
                </li>
                <li>
                  
                  <Link href="">
                    <span>
                      <img src="/images/group-arrow.png" alt="#" />
                    </span>
                    Industries
                  </Link>
                </li>
                <li>
                  
                  <Link href="">
                    <span>
                      <img src="/images/group-arrow.png" alt="#" />
                    </span>
                    Mediacom
                  </Link>
                </li>
              </ul>
            </div>
            <div className={footer.section3}>
              <p>Contact</p>
              <ul>
                <span>
                  <img src="/images/phone.png" alt="" />
                  <li>
                    <a href="tel:+18323090099">+1 832-309-0099</a>
                  </li>
                </span>
                <span>
                  <img src="/images/letter.png" alt="" />
                  <li>
                    <a href="mailto:info@leilanitech.com">
                    info@leilanitech.com
                    </a>
                  </li>
                </span>
                <span>
                  
                  <span className={footer.img3}>
                    <img src="/images/location.png" alt="" />
                  </span>
                  <li>
                  
                  
                  
                <a href="https://www.mapquest.com/us/texas/leilani-inc-420571531">740 W LITTLE YORK ROAD SUITE B, <br></br> HOUSTON, TX, 77091, USA</a>
                  </li>
                </span>
              </ul>
            </div>
          </div>
          <div className={footer.section4}>
            <h1>Have a Project in your mind?</h1>
            <span>
              EMAIL US
              <a>
                <img src="/images/email-arrow.png" alt="" />
              </a>
            </span>
            <>
              <FooterContact />
            </>
          </div>
        </div>
        <div className={footer.section5}>
          <p>2023-2025 | Alrights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
