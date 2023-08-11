import React from "react";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

const Header = () => {
  const location = useLocation();

  return (
    <div className={styles.header}>
      <div className={styles.links}>
        <Link
          className={cn(styles.link, {
            [styles.active]: location.pathname === "/about-me",
          })}
          to="/about-me"
        >
          About Me
        </Link>
        <Link
          className={cn(styles.link, {
            [styles.active]: location.pathname === "/my-works",
          })}
          to="/my-works"
        >
          My Works
        </Link>
        <Link
          className={cn(styles.link, {
            [styles.active]: location.pathname === "/contact-me",
          })}
          to="/contact-me"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Header;
