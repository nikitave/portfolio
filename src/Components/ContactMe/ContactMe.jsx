import React from "react";
import styles from "./ContactMe.module.scss";
import cn from "classnames";
import { motion } from "framer-motion";

const ContactMe = ({ onHover }) => {
	return (
		<div className={styles.contact}>
			<div className={styles.blocks}>
				<motion.div
					className={styles.block}
					initial={{ opacity: 0, y: -100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{duration: .5, delay: .3}}
				>
					<div className={cn(styles.content, styles.first)}>
						<div className={styles.text}>
							You can contact me at this email address:
						</div>
						<div className={styles.important_text}>
							nbogdankov@gmail.com
						</div>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="mailto:nbogdankov@gmail.com"
							className={styles.link}
						>
							<button className={styles.button} type="button">
								Contact by email
							</button>
						</a>
					</div>
					<div className={styles.under_content}>Email</div>
				</motion.div>
				<motion.div
					className={cn(styles.block, styles.another)}
					onMouseEnter={onHover}
					onMouseLeave={() => onHover(false)}
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{duration: .5, delay: .3}}
				>
					<div className={cn(styles.content, styles.second)}>
						<div className={styles.text}>
							You can contact me in telegram with this nickname:
						</div>
						<div className={styles.important_text}>@nikibog</div>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://t.me/nikibog"
							className={styles.link}
						>
							<button className={styles.button} type="button">
								Contact by telegram
							</button>
						</a>
					</div>
					<div className={styles.under_content}>Telegram </div>
				</motion.div>
			</div>
		</div>
	);
};

export default ContactMe;
