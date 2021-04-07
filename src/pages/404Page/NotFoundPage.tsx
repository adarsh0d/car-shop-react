
import React, { FunctionComponent } from 'react';
import AppFrame from '../../components/AppFrame/AppFrame';
import styles from './NotFoundPage.module.css'
import Logo from '../../components/Logo/Logo';
const NotFoundPage: FunctionComponent = () => {
   return(
        <AppFrame>
            <section className={styles.page__container}>
                    <Logo></Logo>
                    <h1 className={styles.page__heading}>404 - Not Found</h1>
                    <p className={styles.page__summary}>Sorry, the page you are looking for does not exist.
                    You can always go back to the homepage</p>
            </section>
        </AppFrame>
    )
}

export default NotFoundPage;