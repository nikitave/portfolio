import React from "react";
import styles from "./ContactMe.module.scss";
import cn from "classnames";
import email from "../../images/email.svg";
import telegram from "../../images/telegram.svg";

const ContactMe = ({ onHover }) => {
	return (
		<div className={styles.contact}>
			<div className={styles.title}>Contact Me</div>
			<div className={styles.blocks}>
				<div className={styles.block}>
					<div className={cn(styles.content, styles.first)}>
						<div className={styles.text}>
							You can contact me at this email address:
						</div>
						<div className={styles.important_text}>
							nbogdankov@gmail.com
						</div>
						<a target="_blank" rel="noopener noreferrer" href="mailto:nbogdankov@gmail.com">
							<button className={styles.button} type="button">
								Contact by email
							</button>
						</a>
					</div>
					<div className={styles.under_content}>Email</div>
				</div>
				<div
					className={cn(styles.block, styles.another)}
					onMouseEnter={onHover}
					onMouseLeave={() => onHover(false)}
				>
					<div className={cn(styles.content, styles.second)}>
						<div className={styles.text}>
							You can contact me in telegram with this nickname:
						</div>
						<div className={styles.important_text}>@nikibog</div>
						<a target="_blank" rel="noopener noreferrer" href="https://t.me/nikibog">
							<button className={styles.button} type="button">
								Contact by telegram
							</button>
						</a>
					</div>
					<div className={styles.under_content}>Telegram </div>
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
