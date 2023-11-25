import React, { useTransition } from "react";
import styles from "./MyWorks.module.scss";
import cn from "classnames";
import { motion } from "framer-motion";
import fc1 from "../../images/fc1.png";
import fc2 from "../../images/fc2.png";
import fc3 from "../../images/fc3.png";
import fc4 from "../../images/fc4.png";
import tt1 from "../../images/tt1.png";
import tt2 from "../../images/tt2.png";
import tt3 from "../../images/tt3.png";
import ittc1 from "../../images/ittc1.png";
import ittc2 from "../../images/ittc2.png";
import ittc3 from "../../images/ittc3.png";
import ittc4 from "../../images/ittc4.png";
import om1 from "../../images/om1.png";
import om2 from "../../images/om2.png";
import om3 from "../../images/om3.png";
import jc1 from "../../images/jc1.png";
import jc2 from "../../images/jc2.png";
import jc3 from "../../images/jc3.png";
import jc4 from "../../images/jc4.png";
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";
import ib1 from "../../images/ib1.png";
import ib2 from "../../images/ib2.png";
import ib3 from "../../images/ib3.png";
import ib4 from "../../images/ib4.png";
import ss1 from "../../images/ss1.png";
import ss2 from "../../images/ss2.png";
import ss3 from "../../images/ss3.png";
import ss4 from "../../images/ss4.png";
import wp1 from "../../images/wp1.png";
import wp2 from "../../images/wp2.png";
import wp3 from "../../images/wp3.png";
import wp4 from "../../images/wp4.png";
import arrow from "../../images/arrow.svg";
import { useTranslation } from "react-i18next";

const MyWorks = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.works}>
            <div className={styles.blocks}>
                <motion.div
                    className={cn(styles.block, styles.second)}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.left}>
                        <div className={styles.left_info}>
                            <div className={styles.left_info_title}>
                                Try this
                            </div>
                            <div className={styles.left_info_text}>
                                {t("tt1")} <span>{t("tt2")}</span>, {t('tt3')}
                                <span>{t('tt4')}</span>.
                            </div>
                        </div>
                        <div>
                            <a
                                className={styles.link}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.figma.com/file/fd251qHK8AnIhVUxTA5AxU/try-this?type=design&node-id=1%3A515&mode=design&t=bQKPI8AKxzeYX3Ar-1"
                            >
                                <button
                                    className={styles.left_link}
                                    type="button"
                                >
                                    {t('show')}
                                    <img
                                        className={styles.left_link_image}
                                        src={arrow}
                                        alt=""
                                    />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className={styles.right_another}>
                        <div className={styles.right_another_block}>
                            <img
                                className={styles.right_another_image}
                                src={tt1}
                                alt=""
                            />
                            <img
                                className={styles.right_another_image}
                                src={tt2}
                                alt=""
                            />
                            <img
                                className={styles.right_another_image}
                                src={tt3}
                                alt=""
                            />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className={cn(styles.block, styles.first)}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.left}>
                        <div className={styles.left_info}>
                            <div className={styles.left_info_title}>
                                Inno Table Tennis Club
                            </div>
                            <div className={styles.left_info_text}>
                                {t('itt1')} <span>{t('itt2')}</span> {t('itt3')} 
                            </div>
                        </div>
                        <div>
                            <a
                                className={styles.link}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.figma.com/file/xIRYM7BFcV15q4hXwSEfop/TableTennis?type=design&node-id=388%3A619&mode=design&t=v2IOngT9DGJHPSVy-1"
                            >
                                <button
                                    className={styles.left_link}
                                    type="button"
                                >
                                    {t('show')}
                                    <img
                                        className={styles.left_link_image}
                                        src={arrow}
                                        alt=""
                                    />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.right_block}>
                            <div className={styles.right_column}>
                                <img
                                    className={styles.right_column_image}
                                    src={ittc1}
                                    alt=""
                                />
                                <img
                                    className={styles.right_column_image}
                                    src={ittc2}
                                    alt=""
                                />
                            </div>
                            <div className={styles.right_column}>
                                <img
                                    className={styles.right_column_image}
                                    src={ittc3}
                                    alt=""
                                />
                                <img
                                    className={styles.right_column_image}
                                    src={ittc4}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className={cn(styles.block, styles.first)}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.left}>
                        <div className={styles.left_info}>
                            <div className={styles.left_info_title}>
                                JellyCraft
                            </div>
                            <div className={styles.left_info_text}>

                                <span>{t('jc1')}</span>{t('jc2')} <span>{t('jc3')}</span> {t('jc4')}
                            </div>
                        </div>
                        <div>
                            <a
                                className={styles.link}
                                target="_blank"
                                rel="noreferrer"
                                href="https://jellycraft.net/"
                            >
                                <button className={styles.left_link}>
                                    {t('visit')}
                                    <img
                                        className={styles.left_link_image}
                                        src={arrow}
                                        alt=""
                                    />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.right_block}>
                            <div className={styles.right_column}>
                                <img
                                    className={styles.right_column_image}
                                    src={jc1}
                                    alt=""
                                />
                                <img
                                    className={styles.right_column_image}
                                    src={jc2}
                                    alt=""
                                />
                            </div>
                            <div className={styles.right_column}>
                                <img
                                    className={styles.right_column_image}
                                    src={jc3}
                                    alt=""
                                />
                                <img
                                    className={styles.right_column_image}
                                    src={jc4}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className={cn(styles.block, styles.second)}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.left}>
                        <div className={styles.left_info}>
                            <div className={styles.left_info_title}>
                                OneMenu
                            </div>
                            <div className={styles.left_info_text}>
                                {t('om1')} <span>{t('om2')}</span>{t('om3')} 
                            </div>
                        </div>
                        <div>
                            <a
                                className={styles.link}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.figma.com/file/m78xN6GSOK6ZTT8gnUGFHx/OneMenu?type=design&node-id=63%3A11&mode=design&t=FnTlKymDxGIn8cd9-1"
                            >
                                <button
                                    className={styles.left_link}
                                    type="button"
                                >
                                    {t('show')}
                                    <img
                                        className={styles.left_link_image}
                                        src={arrow}
                                        alt=""
                                    />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className={styles.right_another}>
                        <div className={styles.right_another_block}>
                            <img
                                className={styles.right_another_image}
                                src={om1}
                                alt=""
                            />
                            <img
                                className={styles.right_another_image}
                                src={om2}
                                alt=""
                            />
                            <img
                                className={styles.right_another_image}
                                src={om3}
                                alt=""
                            />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className={cn(styles.block, styles.first)}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.left}>
                        <div className={styles.left_info}>
                            <div className={styles.left_info_title}>
                                InnoBooking
                            </div>
                            <div className={styles.left_info_text}>
                                {t('ib1')}<span>{t('ib2')}</span>{t('ib3')}
                            </div>
                        </div>
                        <div>
                            <a
                                className={styles.link}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.figma.com/file/xIRYM7BFcV15q4hXwSEfop/TableTennis?type=design&node-id=388%3A619&mode=design&t=v2IOngT9DGJHPSVy-1"
                            >
                                <button
                                    className={styles.left_link}
                                    type="button"
                                >
                                    {t('show')}
                                    <img
                                        className={styles.left_link_image}
                                        src={arrow}
                                        alt=""
                                    />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.right_block}>
                            <div className={styles.right_column}>
                                <img
                                    className={styles.right_column_image}
                                    src={ib1}
                                    alt=""
                                />
                                <img
                                    className={styles.right_column_image}
                                    src={ib2}
                                    alt=""
                                />
                            </div>
                            <div className={styles.right_column}>
                                <img
                                    className={styles.right_column_image}
                                    src={ib3}
                                    alt=""
                                />
                                <img
                                    className={styles.right_column_image}
                                    src={ib4}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className={cn(styles.block, styles.first)}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.left}>
                        <div className={styles.left_info}>
                            <div className={styles.left_info_title}>
                                Score Scout
                            </div>
                            <div className={styles.left_info_text}>
                                {t('ss1')}<span>{t('ss2')}</span>{t('ss3')}
                            </div>
                        </div>
                        <div>
                            <a
                                className={styles.link}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.figma.com/file/499BGrIYN7O3YClxj9nLc3/ScoreScout?type=design&node-id=38%3A843&mode=design&t=evhICo0NZJJAwqSG-1"
                            >
                                <button
                                    className={styles.left_link}
                                    type="button"
                                >
                                    {t('show')}
                                    <img
                                        className={styles.left_link_image}
                                        src={arrow}
                                        alt=""
                                    />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.right_block}>
                            <div className={styles.right_column}>
                                <img
                                    className={styles.right_column_image}
                                    src={ss1}
                                    alt=""
                                />
                                <img
                                    className={styles.right_column_image}
                                    src={ss2}
                                    alt=""
                                />
                            </div>
                            <div className={styles.right_column}>
                                <img
                                    className={styles.right_column_image}
                                    src={ss3}
                                    alt=""
                                />
                                <img
                                    className={styles.right_column_image}
                                    src={ss4}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className={cn(styles.block, styles.first)}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.left}>
                        <div className={styles.left_info}>
                            <div className={styles.left_info_title}>
                                Writer Project
                            </div>
                            <div className={styles.left_info_text}>
                                {t('wp1')}<span>{t('wp2')}</span>{t('wp3')}<span>{t('wp4')}</span>{t('wp5')}
                            </div>
                        </div>
                        <div>
                            <a
                                className={styles.link}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.figma.com/file/499BGrIYN7O3YClxj9nLc3/ScoreScout?type=design&node-id=38%3A843&mode=design&t=evhICo0NZJJAwqSG-1"
                            >
                                <button
                                    className={styles.left_link}
                                    type="button"
                                >
                                    {t('show')}
                                    <img
                                        className={styles.left_link_image}
                                        src={arrow}
                                        alt=""
                                    />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.right_block}>
                            <div className={styles.right_column}>
                                <img
                                    className={styles.right_column_image}
                                    src={wp1}
                                    alt=""
                                />
                                <img
                                    className={styles.right_column_image}
                                    src={wp2}
                                    alt=""
                                />
                            </div>
                            <div className={styles.right_column}>
                                <img
                                    className={styles.right_column_image}
                                    src={wp3}
                                    alt=""
                                />
                                <img
                                    className={styles.right_column_image}
                                    src={wp4}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className={cn(styles.block, styles.first)}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.left}>
                        <div className={styles.left_info}>
                            <div className={styles.left_info_title}>
                                Friendly Carrier
                            </div>
                            <div className={styles.left_info_text}>
                                {t('fc1')}<span>{t('fc2')}</span>{t('fc3')}<span>{t('fc4')}</span>{t('fc5')} 
                            </div>
                        </div>
                        <div>
                            <a
                                className={styles.link}
                                target="_blank"
                                rel="noreferrer"
                                href="https://friendlycarrier.com/"
                            >
                                <button
                                    className={styles.left_link}
                                    type="button"
                                >
                                    Site
                                    <img
                                        className={styles.left_link_image}
                                        src={arrow}
                                        alt=""
                                    />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.right_block}>
                            <div className={styles.right_column}>
                                <img
                                    className={styles.right_column_image}
                                    src={fc1}
                                    alt=""
                                />
                                <img
                                    className={styles.right_column_image}
                                    src={fc2}
                                    alt=""
                                />
                            </div>
                            <div className={styles.right_column}>
                                <img
                                    className={styles.right_column_image}
                                    src={fc3}
                                    alt=""
                                />
                                <img
                                    className={styles.right_column_image}
                                    src={fc4}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className={cn(styles.block, styles.second)}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.left}>
                        <div className={styles.left_info}>
                            <div className={styles.left_info_title}>
                                This site
                            </div>
                            <div className={styles.left_info_text}>
                                {t('p1')}<span>{t('p2')}</span>{t('p3')}
                            </div>
                        </div>
                        <div>
                            <a
                                className={styles.link}
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.figma.com/file/V0WaAKDHpUDIsAQQ2gtOKS/MUI-for-Figma-(Community-version)-(with-Material-UI)-(Community)?type=design&node-id=5703%3A69518&mode=design&t=4e1cQ5NOfvm48EgS-1"
                            >
                                <button
                                    className={styles.left_link}
                                    type="button"
                                >
                                    {t('show')}
                                    <img
                                        className={styles.left_link_image}
                                        src={arrow}
                                        alt=""
                                    />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.right_block}>
                            <div className={styles.right_column}>
                                <img
                                    className={styles.right_column_image}
                                    src={p1}
                                    alt=""
                                />
                                <img
                                    className={styles.right_column_image}
                                    src={p4}
                                    alt=""
                                />
                            </div>
                            <div className={styles.right_column}>
                                <img
                                    className={styles.right_column_image}
                                    src={p3}
                                    alt=""
                                />
                                <img
                                    className={styles.right_column_image}
                                    src={p2}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MyWorks;
