import React, { FunctionComponent } from 'react';
import MenuBarLink from '../../types/MenuBarLink';
import Logo from '../Logo/Logo';
import MenuBar from '../MenuBar/MenuBar';

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
            <header className="page__header">
                <section className="header__left">
                    {props.headerLeft? props.headerLeft: <Logo></Logo>}
                </section>
                <section className="header__right">
                    {props.headerRight? props.headerRight: <MenuBar options={menuOptions}></MenuBar>}
                </section>
            </header>
            <main className="content">
                {props.children}
            </main>
            <footer className="footer">
                {props.footer ? props.footer : "© AUTO1 Group 2018"}
            </footer>
        </div>
    )
}

export default AppFrame;