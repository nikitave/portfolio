import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.scss";
import { motion } from "framer-motion";
import me from "../../images/backgroundImage.png";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import Popup from "../Popups/Popup";
import sport_myuniversity from "../../images/sport_myuniversity.png";
import sport from "../../images/sport.png";
import portflio from '../../images/portfolio.png';
import events from '../../images/events.png';
import tests from '../../images/tests.png';
import players from '../../images/players.png';
import tournament from '../../images/tournament.png';
import components from '../../images/components.png';
import booking from '../../images/booking.png';


const Main = () => {
    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    const { t, i18n } = useTranslation();

    const [isPopupVisible1, setIsPopupVisible1] = useState(false);

    const togglePopup1 = () => {
      setIsPopupVisible1(!isPopupVisible1);
    };

    const [isPopupVisible2, setIsPopupVisible2] = useState(false);

    const togglePopup2 = () => {
      setIsPopupVisible2(!isPopupVisible2);
    };

    const [isPopupVisible3, setIsPopupVisible3] = useState(false);

    const togglePopup3 = () => {
      setIsPopupVisible3(!isPopupVisible3);
    };

    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const toggleBurgerMenu = () => setIsBurgerOpen(!isBurgerOpen);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    useEffect(() => {
        if (i18n.language !== 'ru') {
            i18n.changeLanguage('ru');
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
                        <a className={styles.links} href="#figma"> 
                            <div className={cn(styles.large_element, styles.links_text)}> {t("examples")} </div>
                        </a>
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
                        UX/UI Designer
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
                                    My.university
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.text}>
                                    {/* Личный кабинет студента Университета Иннополис 
                                        <div>- Провел исследование и опрос ЦА</div>
                                        <div>- Создание дизайн системы (библиотека компонентов и гайдлан по использованию шрифтов, цветов и тд)</div>
                                        <div>- Управление командой из трех человек (создание спринтов, проведение митингов, проверка выполнения задач)</div>
                                        - Разработал прототип веб-приложения
                                        <div>- Провел usability тестирование</div> */}
                                          {t('my-university').split('\n').map((line, index) => (
                                            <span key={index}>
                                            {line}
                                            <br />
                                            </span>
                                          ))}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button onClick={togglePopup1} className={styles.button}>{t("more")} </button>
                                <Popup show={isPopupVisible1} handleClose={togglePopup1}>
                                    <div className={styles.display_large}>
                                        My.university
                                    </div>
                                    <div className={cn(styles.text, styles.popup_text)}>
                                        {t('my-university').split('\n').map((line, index) => (
                                            <span key={index}>
                                            {line}
                                            <br />
                                            </span>
                                        ))}
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("fittest")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {t("fittest-description")}  
                                        </div>
                                        <img className={styles.page_block_image} src={sport} alt="" />
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("sport-info")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {t('sport-info-description')}
                                        </div>
                                        <img className={styles.page_block_image} src={sport_myuniversity} alt="" />
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("components")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {t("components-description")}
                                        </div>
                                        <img className={styles.page_block_image} src={components} alt="" />
                                    </div>
                                </Popup>
                            </div>
                        </div>
                        <div className={styles.right_part}>
                            <img className={styles.right_part_image} src={sport} alt="" />
                        </div>
                    </div>

                    <div className={styles.work}>
                        <div className={styles.left_part}>
                            <div className={styles.text_info}>
                                <div className={styles.title}>
                                    Apply Innopolis University
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.text}>
                                    {t('apply').split('\n').map((line, index) => (
                                            <span key={index}>
                                            {line}
                                            <br />
                                            </span>
                                    ))}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button onClick={togglePopup2} className={styles.button}>{t("more")}</button>
                                <Popup show={isPopupVisible2} handleClose={togglePopup2}>
                                    <div className={styles.display_large}>
                                        Apply Innopolis University
                                    </div>
                                    <div className={cn(styles.text, styles.popup_text)}>
                                    {t('apply').split('\n').map((line, index) => (
                                            <span key={index}>
                                            {line}
                                            <br />
                                            </span>
                                    ))}
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("event")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {t("event-description")}
                                        </div>
                                        <img className={styles.page_block_image} src={events} alt="" />
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("test")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {t("test-description")}
                                        </div>
                                        <img className={styles.page_block_image} src={tests} alt="" />
                                    </div>
                                </Popup>
                            </div>
                            
                        </div>
                        <div className={styles.right_part}>
                            <img className={styles.right_part_image} src={events} alt="" />
                        </div>
                    </div>

                    <div className={styles.work}>
                        <div className={styles.left_part}>
                            <div className={styles.text_info}>
                                <div className={styles.title}>
                                    Inno Table Tennis
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.text}>
                                    {t('sport').split('\n').map((line, index) => (
                                            <span key={index}>
                                            {line}
                                            <br />
                                            </span>
                                    ))}

                                    </div>
                                </div>
                            </div>
                            <div>
                                <button onClick={togglePopup3} className={styles.button}>{t("more")}</button>
                                <Popup show={isPopupVisible3} handleClose={togglePopup3}>
                                    <div className={styles.display_large}>
                                        Inno Table Tennis
                                    </div>
                                    <div className={cn(styles.text, styles.popup_text)}>
                                        {t('sport').split('\n').map((line, index) => (
                                                <span key={index}>
                                                {line}
                                                <br />
                                                </span>
                                        ))}
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("players")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {t("players-description")}
                                        </div>
                                        <img className={styles.page_block_image} src={players} alt="" />
                                    </div>
                                    <div className={styles.page_block}>
                                        <div className={styles.title}>
                                            {t("tournament")}
                                        </div>
                                        <div className={cn(styles.text, styles.page_block_text)}>
                                            {t("tournament-description")}
                                        </div>
                                        <img className={styles.page_block_image} src={tournament} alt="" />
                                    </div>
                                </Popup>
                            </div>
                            
                        </div>
                        <div className={styles.right_part}>
                            <img className={styles.right_part_image} src={players} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="figma" className={styles.choice}>
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
                    {/* <div className={styles.work}>
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
                    </div> */}
                </div>
            </div>

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
