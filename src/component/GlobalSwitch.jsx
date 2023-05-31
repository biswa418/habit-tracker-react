import React from 'react'
import styles from '../assets/Switch.module.css'

const GlobalSwitch = (props) => {
    return (
        <>
            <label htmlFor="theme" className={styles.theme}>
                <span className={styles.theme__toggleWrap}>
                    <input id="theme"
                        className={styles.theme__toggle}
                        type="checkbox"
                        role="switch"
                        name="theme"
                        value="dark"
                        onClick={() => props.theme()}
                    />
                    <span className={styles.theme__fill}></span>
                    <span className={styles.theme__icon}>
                        <span className={styles.theme__iconPart}></span>
                        <span className={styles.theme__iconPart}></span>
                        <span className={styles.theme__iconPart}></span>
                        <span className={styles.theme__iconPart}></span>
                        <span className={styles.theme__iconPart}></span>
                        <span className={styles.theme__iconPart}></span>
                        <span className={styles.theme__iconPart}></span>
                        <span className={styles.theme__iconPart}></span>
                        <span className={styles.theme__iconPart}></span>
                    </span>
                </span>
            </label>
        </>
    )
}

export default GlobalSwitch