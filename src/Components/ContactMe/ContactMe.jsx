import React from "react";
import styles from "./ContactMe.module.scss";
import cn from "classnames";
import email from '../../images/email.svg'
import telegram from  '../../images/telegram.svg'

const ContactMe = ({ onHover }) => {
	return (
		<div className={styles.contact}>
			<div className={styles.title}>Contact Me</div>
			<div className={styles.blocks}>
				<div className={styles.block}>
                    <img className={styles.image} src={email} alt="" />
                    <div>Email</div>
                </div>
				<div
					className={cn(styles.block, styles.another)}
					onMouseEnter={onHover}
					onMouseLeave={() => onHover(false)}
				>
                    <img className={styles.image} src={telegram} alt="" />
                    <div>Telegram </div>
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
