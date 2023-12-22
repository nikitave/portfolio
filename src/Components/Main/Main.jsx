import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.scss";
import { motion } from "framer-motion";
import me from "../../images/backgroundImage.png";
import { useTranslation } from "react-i18next";

const Main = () => {
        const ref = useRef(null);
        const handleClick = () => {
                ref.current?.scrollIntoView({ behavior: "smooth" });
        };

        const { t } = useTranslation();

        return (
                <div className={styles.main}>
                        <div className={styles.banner}>
                                <div className={styles.content}>
                                        <motion.div
                                                className={styles.content_text}
                                                initial={{
                                                        opacity: 0,
                                                        x: -100,
                                                }}
                                                whileInView={{
                                                        opacity: 1,
                                                        x: 0,
                                                }}
                                                transition={{
                                                        duration: 1,
                                                        delay: 0,
                                                }}
                                                viewport={{ once: true }}
                                        >
                                                {t("greeting")}
                                        </motion.div>
                                        <motion.div
                                                className={styles.content_title}
                                                initial={{
                                                        opacity: 0,
                                                        y: -100,
                                                }}
                                                whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                }}
                                                transition={{
                                                        duration: 1,
                                                        delay: 1,
                                                }}
                                                viewport={{ once: true }}
                                        >
                                                {t("designer")}
                                        </motion.div>
                                        <Link to="/contact-me">
                                                <motion.button
                                                        className={
                                                                styles.button
                                                        }
                                                        type="button"
                                                        initial={{
                                                                opacity: 0,
                                                                y: 100,
                                                        }}
                                                        whileInView={{
                                                                opacity: 1,
                                                                y: 0,
                                                        }}
                                                        transition={{
                                                                duration: 1,
                                                                delay: 2,
                                                        }}
                                                        viewport={{
                                                                once: true,
                                                        }}
                                                >
                                                        {t("contact")}
                                                </motion.button>
                                        </Link>
                                        <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{
                                                        duration: 1,
                                                        delay: 2,
                                                }}
                                                viewport={{ once: true }}
                                                className={styles.check}
                                        >
                                                <button
                                                        className={
                                                                styles.content_button
                                                        }
                                                        onClick={handleClick}
                                                        type="button"
                                                >
                                                        <svg
                                                                className={
                                                                        styles.show_image
                                                                }
                                                                viewBox="0 0 24 24"
                                                        >
                                                                <path
                                                                        d="M16.59 8.29501L12 12.875L7.41 8.29501L6 9.70501L12 15.705L18 9.70501L16.59 8.29501Z"
                                                                        fill="currentColor"
                                                                />
                                                        </svg>
                                                </button>
                                        </motion.div>
                                </div>
                                <div className={styles.image_block}>
                                        <img
                                                className={styles.image}
                                                src={me}
                                                alt=""
                                        />
                                </div>
                        </div>
                        <div ref={ref} className={styles.choice}>
                                {/* <Link to="/about-me" className={styles.block}>
					<div className={styles.title}>About Me</div>
					<div className={styles.text}>
						Here you will find some{" "}
						<span>information about me</span>
					</div>
				</Link> */}
                                <Link to="/my-works" className={styles.block}>
                                        <div className={styles.title}>
                                                {t("works")}
                                        </div>
                                        <div className={styles.text}>
                                                {t("works-text1")}{" "}
                                                <span>{t("works-text2")} </span>{" "}
                                                {t("works-text3")}
                                        </div>
                                </Link>
                                <Link to="/contact-me" className={styles.block}>
                                        <div className={styles.title}>
                                                {t("contact")}
                                        </div>
                                        <div className={styles.text}>
                                                {t("contact-text1")}{" "}
                                                <span>{t("contact_sm")}</span>
                                                {t("using")} <span>email</span>{" "}
                                                {t("or")} <span>telegram</span>
                                        </div>
                                </Link>
                        </div>
                </div>
        );
};

export default Main;
