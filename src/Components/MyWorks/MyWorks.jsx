import React from "react";
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

const MyWorks = () => {
	return (
		<div className={styles.works}>
			<div className={styles.title}>My Works</div>
			<div className={styles.blocks}>
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
								Innopolis Table Tennis Club
							</div>
							<div className={styles.left_info_text}>
								I am a member of Table Tennis club at my
								university. Our club decided{" "}
								<span>to make the life easier</span> and to made
								site for saving results and for users to see
								information. I <span>made UX/UI design</span>{" "}
								for this project.
							</div>
						</div>
						<div className={styles.left_links}>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.figma.com/file/xIRYM7BFcV15q4hXwSEfop/TableTennis?type=design&node-id=388%3A619&mode=design&t=v2IOngT9DGJHPSVy-1"
							>
								Figma
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
								I worked in this startup as an{" "}
								<span> outsource designer</span>. It is a mobile
								app which is made for trying new clothes. I made{" "}
								<span>UX/UI</span> designs for this project.
							</div>
						</div>
						<div className={styles.left_links}>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.figma.com/file/fd251qHK8AnIhVUxTA5AxU/try-this?type=design&node-id=1%3A515&mode=design&t=bQKPI8AKxzeYX3Ar-1"
							>
								Figma
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
								JellyCraft
							</div>
							<div className={styles.left_info_text}>
								This{" "}
								<span>site was losing a lot of customers</span>,
								because of the bad design, all the other sites
								with similar functionality and more modern
								design, they attracted more people. So, my{" "}
								<span>
									purpose was to return old customers and
									attract new ones
								</span>{" "}
								. And I made new <span>UI/UX design</span> for
								this project, and <span>succeeded</span>.
							</div>
						</div>
						<div className={styles.left_links}>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://jellycraft.net/"
							>
								Site
							</a>
							,{" "}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.figma.com/file/Wux0QQ44VwgCWhLI11mLNA/something?type=design&node-id=0%3A1&mode=design&t=h0lRtwvnN1yf9EHU-1"
							>
								Figma
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
								There was an idea to unify all menus in one. I
								<span>made UI/UX design and frontend</span>.
								This WebApp uses users’ colors. You can check
								how WebApp looks on different devices with{" "}
								<span>different preset user colors</span>.
							</div>
						</div>
						<div className={styles.left_links}>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.figma.com/file/m78xN6GSOK6ZTT8gnUGFHx/OneMenu?type=design&node-id=63%3A11&mode=design&t=FnTlKymDxGIn8cd9-1"
							>
								Figma
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
								Friendly Carrier
							</div>
							<div className={styles.left_info_text}>
								I worked in this startup as the{" "}
								<span>designer </span>. I designed{" "}
								<span>UI/UX</span> for all the pages. I was in
								this project from the beginning. Also, I{" "}
								<span>adapted</span> all the pages{" "}
								<span>for mobile devices</span> in code.
							</div>
						</div>
						<div className={styles.left_links}>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://friendlycarrier.com/"
							>
								Site
							</a>
							,{" "}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.figma.com/file/V0WaAKDHpUDIsAQQ2gtOKS/MUI-for-Figma-(Community-version)-(with-Material-UI)-(Community)?type=design&node-id=5703%3A69518&mode=design&t=4e1cQ5NOfvm48EgS-1"
							>
								Figma
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
			</div>
		</div>
	);
};

export default MyWorks;
