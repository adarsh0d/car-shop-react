
import React, { FunctionComponent } from 'react';
import AppFrame from '../../components/AppFrame/AppFrame';
import styles from './NotFoundPage.module.css'
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router-dom';

const NotFoundPage: FunctionComponent = () => {
   return(
        <AppFrame>
            <section className={styles.page__container}>
                    <Logo></Logo>
                    <h1 data-testid="heading" className={styles.page__heading}>404 - Not Found</h1>
                    <p data-testid="message" className={styles.page__summary}>Sorry, the page you are looking for does not exist.
                    You can always go back to the <Link to='/'>homepage</Link></p>
            </section>
        </AppFrame>
    )
}

export default NotFoundPage;