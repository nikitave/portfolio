import React from "react";
import styles from "./Banner.module.scss"
import me from '../../images/backgroundImage.png'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <div className={styles.text}>Hello everyone! I am Bogdankov Nikita</div>
                <div className={styles.title}>Designer</div>
                <button className={styles.button} type="button">Contact me</button>
            </div>
            <div className={styles.image_block}>
                <img className={styles.image} src={me} alt="" />
            </div>
        </div>
    )
}

export default Banner;