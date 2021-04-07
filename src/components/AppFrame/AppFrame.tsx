import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import MenuBarLink from '../../types/MenuBarLink';
import Logo from '../Logo/Logo';
import MenuBar from '../MenuBar/MenuBar';
import styles from './AppFrame.module.css'
type AppFrameProps = {
    headerLeft?: JSX.Element,
    headerRight?: JSX.Element,
    footer?: JSX.Element
}

const menuOptions: Array<MenuBarLink> = [{
    text: 'Purchase',
    url: '/purchase'
}, {
    text: 'My Orders',
    url: '/orders'
}, {
    text: 'Sell',
    url: 'sell'
}]
const AppFrame: FunctionComponent<AppFrameProps> = (props) => {
    return (
        <div className="page-container">
            <header className={styles.page__header}>
                <section className={styles.header__left}>
                    {props.headerLeft? props.headerLeft: <Link to="/"><Logo></Logo></Link>}
                </section>
                <section className={styles.header__right}>
                    {props.headerRight? props.headerRight: <MenuBar options={menuOptions}></MenuBar>}
                </section>
            </header>
            <main className={styles.page__content}>
                {props.children}
            </main>
            <footer className={styles.page__footer}>
                {props.footer ? props.footer : "© AUTO1 Group 2018"}
            </footer>
        </div>
    )
}

export default AppFrame;