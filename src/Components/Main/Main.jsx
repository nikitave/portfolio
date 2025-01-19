import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.scss";
import { motion } from "framer-motion";
import me from "../../images/backgroundImage.png";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import Popup from "../Popups/Popup";
import comD1 from '../../images/comD1.png';
import comD2 from '../../images/comD2.png';
import comD3 from '../../images/comD3.png';
import comD4 from '../../images/comD4.png';
import mu1 from '../../images/mu1.png';
import mu2 from '../../images/mu2.png';
import mu3 from '../../images/mu3.png';
import mu4 from '../../images/mu4.png';
import aiu1 from '../../images/aiu1.png';
import aiu2 from '../../images/aiu2.png';
import aiu3 from '../../images/aiu3.png';
import aiu4 from '../../images/aiu4.png';



const Main = () => {
    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    const { t, i18n } = useTranslation();
    const tt = i18n.t('my-university').replace(/{lineBreak}/g, '\n');

    const [isPopupVisibleComD, setIsPopupVisibleComD] = useState(false);

    const togglePopupComD = () => {
      setIsPopupVisibleComD(!isPopupVisibleComD);
    };

    const [isPopupVisibleMU, setIsPopupVisibleMU] = useState(false);

    const togglePopupMU = () => {
      setIsPopupVisibleMU(!isPopupVisibleMU);
    };

    const [isPopupVisibleAIU, setIsPopupVisibleAUI] = useState(false);

    const togglePopupAUI = () => {
      setIsPopupVisibleAUI(!isPopupVisibleAIU);
    };


    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const toggleBurgerMenu = () => setIsBurgerOpen(!isBurgerOpen);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    useEffect(() => {
        if (i18n.language !== 'en') {
            i18n.changeLanguage('en');
        }
    }, [i18n]);

    return (
        <div className={styles.main}>

            <div className={styles.header}>
                <div className={styles.header_elements}>
                    {/* Burger Menu Icon */}
                    <div className={styles.burger_icon} onClick={toggleBurgerMenu}>
                        <span className={styles.burger_line}></span>
                        <span className={styles.burger_line}></span>
                        <span className={styles.burger_line}></span>
                    </div>

                    {/* Burger Menu Items */}
                    {isBurgerOpen && (
                        <div className={styles.burger_menu}>
                            <a className={styles.links} href="#works" onClick={toggleBurgerMenu}>
                                <div className={cn(styles.menu_item)}>{t("works")}</div>
                            </a>
                            <a className={styles.links} href="#figma" onClick={toggleBurgerMenu}>
                                <div className={cn(styles.menu_item)}>{t("examples")}</div>
                            </a>
                            <a className={styles.links} href="#contact" onClick={toggleBurgerMenu}>
                                <div className={cn(styles.menu_item)}>{t("contacts")}</div>
                            </a>
                            <div className={styles.languageSwitcher}>
                                {i18n.language === 'ru' ? (
                                    <button className={styles.language_button} onClick={() => changeLanguage('en')}>En</button>
                                ) : (
                                    <button className={styles.language_button} onClick={() => changeLanguage('ru')}>Ru</button>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Header Links for Desktop View */}
                    <div className={styles.desktop_links}>
                        <a className={styles.links} href="#works"> 
                            <div className={cn(styles.large_element, styles.links_text)}> {t("works")} </div>
                        </a>
                        {/* <a className={styles.links} href="#figma"> 
                            <div className={cn(styles.large_element, styles.links_text)}> {t("examples")} </div>
                        </a> */}
                        <a className={styles.links} href="#contact">
                            <div className={cn(styles.large_element, styles.links_text)}>{t("contacts")} </div>
                        </a>
                        <div className={styles.languageSwitcher}>
                            {i18n.language === 'ru' ? (
                                <button className={styles.language_button} onClick={() => changeLanguage('en')}>En</button>
                            ) : (
                                <button className={styles.language_button} onClick={() => changeLanguage('ru')}>Ru</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

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
                        {t("name")} < br/> {t("surname")}
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
                            delay: 0,
                        }}
                        viewport={{ once: true }}
                    >
                        Product Designer
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0,
                        }}
                        viewport={{ once: true }}
                        className={styles.check}
                    >
                        {/* <button
                            className={styles.content_button}
                            onClick={handleClick}
                            type="button"
                        >
                            <svg
                                className={styles.show_image}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M16.59 8.29501L12 12.875L7.41 8.29501L6 9.70501L12 15.705L18 9.70501L16.59 8.29501Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button> */}
                    </motion.div>
                </div>
                <div className={styles.image_block}>
                    <img className={styles.image} src={me} alt="" />
                </div>
            </div>
            
            <div id="works" className={styles.choice}>
                <div className={styles.large_title}>
                    {t("works")}
                </div>

                <div className={styles.works}>

                <div className={styles.work}>
                        <div className={styles.left_part}>
                            <div className={styles.text_info}>
                                <div className={styles.title}>
                                    ComD
                                </div>
                                <div className={styles.text}>
                                    November 2024 - December 2024
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.text}>
                                    {/* Личный кабинет студента Университета Иннополис 
                                        <div>- Провел исследование и опрос ЦА</div>
                                        <div>- Создание дизайн системы (библиотека компонентов и гайдлан по использованию шрифтов, цветов и тд)</div>
                                        <div>- Управление командой из трех человек (создание спринтов, проведение митингов, проверка выполнения задач)</div>
                                        - Разработал прототип веб-приложения
                                        <div>- Провел usability тестирование</div> */}
                                        {t('short-c')}
                                          {/* {t('my-university').split('\n').map((line, index) => (
                                            <span key={index}>
                                            {line}
                                            <br />
                                            </span>
                                          ))} */}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button onClick={togglePopupComD} className={styles.button}>{t("more")} </button>
                                <Popup show={isPopupVisibleComD} handleClose={togglePopupComD}>
                                    <div className={styles.display_large}>
                                        ComD
                                    </div>
                                    {/* <div className={cn(styles.text, styles.popup_text)}>
                                        {t('my-university').split('\n').map((line, index) => (
                                            <span key={index}>
                                            {line}
                                            <br />
                                            </span>
                                        ))}
                                    </div> */}
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("overview")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {t('overview-c')}
                                        </div>
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("problem")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {t('sport-info-description')}
                                        </div>
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("role")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {/* {t("role-c")} */}
                                            {t('role-c').split('\n').map((line, index) => (
                                                <span key={index}>
                                                {line}
                                                <br />
                                                </span>
                                            ))}
                                            
                                        </div>
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("process")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                        {t('process-c').split('\n').map((line, index) => (
                                                <span key={index}>
                                                {line}
                                                <br />
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    {/* <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("results")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                        </div>
                                    </div> */}
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("screens")}
                                        </div>
                                        <img className={styles.page_block_image} src={comD1} alt="" />
                                        <img className={styles.page_block_image} src={comD2} alt="" />
                                        <img className={styles.page_block_image} src={comD4} alt="" />
                                        <img className={styles.page_block_image} src={comD3} alt="" />
                                    </div>
                                </Popup>
                            </div>
                        </div>
                        <div className={styles.right_part}>
                            <img className={styles.right_part_image} src={comD1} alt="" />
                        </div>
                </div>

                <div className={styles.work}>
                        <div className={styles.left_part}>
                            <div className={styles.text_info}>
                                <div className={styles.title}>
                                    my.university
                                </div>
                                <div className={styles.text}>
                                    November 2023 - December 2024
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.text}>
                                    {/* Личный кабинет студента Университета Иннополис 
                                        <div>- Провел исследование и опрос ЦА</div>
                                        <div>- Создание дизайн системы (библиотека компонентов и гайдлан по использованию шрифтов, цветов и тд)</div>
                                        <div>- Управление командой из трех человек (создание спринтов, проведение митингов, проверка выполнения задач)</div>
                                        - Разработал прототип веб-приложения
                                        <div>- Провел usability тестирование</div> */}
                                        {t('short-mu')}
                                          {/* {t('my-university').split('\n').map((line, index) => (
                                            <span key={index}>
                                            {line}
                                            <br />
                                            </span>
                                          ))} */}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button onClick={togglePopupMU} className={styles.button}>{t("more")} </button>
                                <Popup show={isPopupVisibleMU} handleClose={togglePopupMU}>
                                    <div className={styles.display_large}>
                                        my.university
                                    </div>
                                    {/* <div className={cn(styles.text, styles.popup_text)}>\ */}
                                        {/* {t('short-mu')} */}
                                        {/* {t('my-university').split('\n').map((line, index) => (
                                            <span key={index}>
                                            {line}
                                            <br />
                                            </span>
                                        ))} */}
                                    {/* </div> */}
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("overview")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {t('overview-mu')}
                                        </div>
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("problem")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {t('problem-mu')}
                                           
                                        </div>
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("role")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {/* {t('role-mu')} */}
                                            {t('role-mu').split('\n').map((line, index) => (
                                            <span key={index}>
                                            {line}
                                            <br />
                                            </span>
                                          ))}
                                        </div>
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("process")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {t('process-mu').split('\n').map((line, index) => (
                                                <span key={index}>
                                                {line}
                                                <br />
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("results")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {t('results-mu')}
                                            
                                        </div>
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("screens")}
                                        </div>
                                        <img className={styles.page_block_image} src={mu1} alt="" />
                                        <img className={styles.page_block_image} src={mu2} alt="" />
                                        <img className={styles.page_block_image} src={mu3} alt="" />
                                        <img className={styles.page_block_image} src={mu4} alt="" />
                                    </div>
                                </Popup>
                            </div>
                        </div>
                        <div className={styles.right_part}>
                            <img className={styles.right_part_image} src={mu1} alt="" />
                        </div>
                </div>

                <div className={styles.work}>
                        <div className={styles.left_part}>
                            <div className={styles.text_info}>
                                <div className={styles.title}>
                                    Apply Innopolis University
                                </div>
                                <div className={styles.text}>
                                    November 2022 - April 2023
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.text}>
                                    {/* Личный кабинет студента Университета Иннополис 
                                        <div>- Провел исследование и опрос ЦА</div>
                                        <div>- Создание дизайн системы (библиотека компонентов и гайдлан по использованию шрифтов, цветов и тд)</div>
                                        <div>- Управление командой из трех человек (создание спринтов, проведение митингов, проверка выполнения задач)</div>
                                        - Разработал прототип веб-приложения
                                        <div>- Провел usability тестирование</div> */}
                                        {t('short-aiu')}
                                          {/* {t('my-university').split('\n').map((line, index) => (
                                            <span key={index}>
                                            {line}
                                            <br />
                                            </span>
                                          ))} */}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button onClick={togglePopupAUI} className={styles.button}>{t("more")} </button>
                                <Popup show={isPopupVisibleAIU} handleClose={togglePopupAUI}>
                                    <div className={styles.display_large}>
                                        Apply Innopolis University
                                    </div>
                                    {/* <div className={cn(styles.text, styles.popup_text)}>
                                        {t('my-university').split('\n').map((line, index) => (
                                            <span key={index}>
                                            {line}
                                            <br />
                                            </span>
                                        ))}
                                    </div> */}
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("overview")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {t('overview-aiu')}
                                        </div>
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("problem")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {t('problem-aiu')}
                                        </div>
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("role")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {t('role-aiu').split('\n').map((line, index) => (
                                                <span key={index}>
                                                {line}
                                                <br />
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("process")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {t('process-aiu').split('\n').map((line, index) => (
                                                <span key={index}>
                                                {line}
                                                <br />
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("results")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {t('results-aiu')}  
                                        </div>
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("screens")}
                                        </div>
                                        <img className={styles.page_block_image} src={aiu1} alt="" />
                                        <img className={styles.page_block_image} src={aiu2} alt="" />
                                        <img className={styles.page_block_image} src={aiu3} alt="" />
                                        <img className={styles.page_block_image} src={aiu4} alt="" />
                                    </div>
                                </Popup>
                            </div>
                        </div>
                        <div className={styles.right_part}>
                            <img className={styles.right_part_image} src={aiu1} alt="" />
                        </div>
                </div>

                </div>
            </div>
            {/* <div id="figma" className={styles.choice}>
                <div className={styles.large_title}>
                    {t("examples")}
                </div>
                <div className={styles.works}>
                    <div className={styles.work}>
                        <div className={styles.left_part}>
                            <div className={styles.text_info}>
                                <div className={styles.title}>
                                    Portfolio
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.text}>
                                        {t("portfolio")}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.figma.com/design/BBRQSKtYJn7AgORgnFkE4v/portfolio?node-id=329-303&t=MVmkS3dfuZhYWCZg-1"
                                    className={styles.link}
                                >
                                    <button className={styles.button} type="button">
                                        {t("go-figma")}
                                    </button>
 						        </a>
                            </div>
                        </div>
                        <div className={styles.right_part}>
                            <img className={styles.right_part_image} src={portflio} alt="" />
                        </div>
                    </div>
                    <div className={styles.work}>
                        <div className={styles.left_part}>
                            <div className={styles.text_info}>
                                <div className={styles.title}>
                                    Inno Booking
                                </div>
                                <div className={styles.date}>
                                    <div className={styles.element}>
                                        Октябрь 2023
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.text}>
                                        Я сделал дизайн сайта для бронирования аудиторий в университете. Данный проект должен был пойти в производство, но поменялась концепция, после чего у меня осталась предыдущая версия, которую можно посмотреть по ссылке ниже.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.figma.com/design/xiAbCMT7V66R0oHSUARs2i/InnoBooking?node-id=1362-425&t=PJ1v0n3ASYbnChqB-1"
                                    className={styles.link}
                                >
                                    <button className={styles.button} type="button">
                                        Перейти в фигму
                                    </button>
 						        </a>
                            </div>
                        </div>
                        <div className={styles.right_part}>
                            <img className={styles.right_part_image} src={booking} alt="" />
                        </div>
                    </div>
                </div>
            </div> */}

            <div id="contact" className={styles.choice}>
                <div className={styles.large_title}>
                    {t('contacts')}
                </div>
                <div className={styles.contacts}>
                    <div className={styles.contact}>
                        <div className={styles.large_element}>
                            {t("mail")}
                        </div>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:nbogdankov@gmail.com"
                            className={styles.link}
                        >
                            <div className={cn(styles.title, styles.link_text)} >nbogdankov@gmail.com</div>
                        </a>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.large_element}>
                            Telegram
                        </div>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://t.me/nikibog"
                                className={styles.link}
                            >
                                <div className={cn(styles.title, styles.link_text)} >@nikibog</div>
                            </a>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.small_text}>
                    © 2024 Nikita Bogdankov All right reserved
                </div>
            </div>

        </div>
    );
};

export default Main;
