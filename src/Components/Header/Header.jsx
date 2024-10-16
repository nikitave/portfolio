import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import menu from "../../images/menu.svg";
import close from "../../images/close.svg";
import { useTranslation } from 'react-i18next';

const Header = ({ color, colorTwo }) => {
    const location = useLocation();

    const isSmall = window.innerWidth < 850;

    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => {
        setIsToggled(!isToggled);
    };

    const [language, setLanguage] = useState(false)

    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(!language)
    };

  
    return (
        <div className={styles.header}>
            <div className={styles.links}>
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
                        [styles.activeD]: color && !isSmall,
                    })}
                    to="/contact-me"
                >
                    Contact Me
                </Link>
            </div>
            <div
                className={cn(
                    styles.links_mobile,
                    isToggled ? styles.active : null
                )}
            >
                <button
                    className={cn(
                        styles.burger_button,
                        styles.burger_button_open
                    )}
                    type="button"
                    onClick={toggle}
                >
                    <img className={styles.menu_image} src={close} alt="" />
                </button>
                <div className={styles.link_flex}>
                    <Link
                        className={cn(styles.mobile_link, {
                            [styles.mobile_link_active]:
                                location.pathname === "/my-works",
                        })}
                        to="/my-works"
                    >
                        My Works
                    </Link>
                    <Link
                        className={cn(styles.mobile_link, {
                            [styles.mobile_link_active]:
                                location.pathname === "/contact-me",
                        })}
                        to="/contact-me"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>

            <div
                className={cn(
                    styles.burger,
                    isToggled ? styles.disappeared : null
                )}
            >
                <button
                    type="button"
                    onClick={toggle}
                    className={styles.burger_button}
                >
                    <img className={styles.menu_image} src={menu} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Header;
