import React from "react";
import styles from "./AboutMe.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom"

const AboutMe = ({ onHover }) => {
	return (
		<div className={styles.about}>
			<div className={styles.title}>About Me</div>
			<div className={styles.blocks}>
				<div className={styles.back_img}></div>
				<div
					className={cn(styles.block, styles.first)}
					onMouseEnter={onHover}
					onMouseLeave={() => onHover(false)}
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
				</div>
				<div className={cn(styles.block, styles.second)}>
					<div className={styles.text}>
						Here I want to tell you a bit about myself. I really{" "}
						<span>like designing sites</span>. But what I don’t like
						is being not original. So you can be sure that if I do
						the site, you can be sure that{" "}
						<span>site will contain original ideas</span>, because
						it’s the thing I like the most. If you want your site to
						have more views, you know <Link className={styles.link} to="/contact-me">my contact</Link>!
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
