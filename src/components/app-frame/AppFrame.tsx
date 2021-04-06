import React, { FunctionComponent } from 'react';

type AppFrameProps = {
    headerLeft: JSX.Element,
    headerRight: JSX.Element,
    footer: JSX.Element
}

const AppFrame: FunctionComponent<AppFrameProps> = (props) => {
    return (
        <div className="page-container">
            <header className="page__header">
                <section className="header__left">
                    {props.headerLeft}
                </section>
                <section className="header__right">
                    {props.headerRight}
                </section>
            </header>
            <main className="content">
                {props.children}
            </main>
            <footer className="footer">
                {props.footer}
            </footer>
        </div>
    )
}

export default AppFrame;