import React, {FunctionComponent} from 'react'
import styles from './Logo.module.css';
const Logo: FunctionComponent = () => {
    return(
        <img role="banner" className={styles.logo} src="/logo.png" alt="Auto1" width="138" height="28"></img>
    )
}

export default Logo;