import React from "react";
import styles from "./AboutMe.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutMe = ({ onHover }) => {
	return (
		<div className={styles.about}>
			<div className={styles.blocks}>
				<motion.div
					className={styles.back_img}
					initial={{ opacity: 0, y: -100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				></motion.div>
				<motion.div
					className={cn(styles.block, styles.first)}
					onMouseEnter={onHover}
					onMouseLeave={() => onHover(false)}
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<div className={styles.short}>
						<div className={styles.short_title}>
							Bogdankov Nikita
						</div>
						<div className={styles.short_info}>
							<span>UI/UX</span> designer
						</div>
						<div className={styles.short_info}>
							<span>3rd</span> year Innopolis University student
						</div>
						<div className={styles.short_info}>
							Designer in <span>three startups</span>
						</div>
					</div>
				</motion.div>
				<motion.div
					className={cn(styles.block, styles.second)}
					initial={{ opacity: 0, y: -100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<div className={styles.text}>
						Here I want to tell you a bit about myself. I really{" "}
						<span>like designing sites</span>. But what I don’t like
						is being not original. So if I do the site, you can be
						sure that <span>site will contain original ideas</span>.
						If you want your site to have good UX and UI, you know{" "}
						<Link className={styles.link} to="/contact-me">
							my contact
						</Link>
						!
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default AboutMe;
