import React from "react";
import header from "../../../styles/header/header.module.scss";
import Link from "next/link";
const Header = () => {
  return (
    <header className={header.nav_header}>
      <nav className={header.header}>
        <div className={header.nav_logo}>
          <Link href="/">LEILANI</Link>
        </div>
        <div className={header.nav_list}>
          <ul>
            <li>
              <Link href="/services/digital-agency">Digital Agency</Link>
            </li>
            <li>
              <Link href="/services/tele-communication">Tele-communication</Link>
            </li>
            <li>
              <Link href="/blogs">Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
