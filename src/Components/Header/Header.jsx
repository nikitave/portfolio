import React from "react";
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.links}>
                <Link className={styles.link} to='/about-me'>About Me</Link>
                <Link className={styles.link} to='/my-works'>My Works</Link>
                <Link className={styles.link} to='/contact-me'>Contact Us</Link>
            </div>
        </div>
    )
}


export default Header;