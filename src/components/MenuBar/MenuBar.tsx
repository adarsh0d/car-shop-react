import React, {FunctionComponent} from 'react';
import MenuBarLink from '../../types/MenuBarLink';
import styles from './MenuBar.module.css'

type MenuBarProps = {
    options: Array<MenuBarLink>
}

const MenuBar: FunctionComponent<MenuBarProps> = ({options}) => {
    return (
        <nav data-testid="menu">
            <ul className={styles.menu}>
                {options.map((option: MenuBarLink, i: number) => 
                    <li key={i}><a className={styles.menu__link} href={option.url}>{option.text}</a></li>
                )}
            </ul>
        </nav>
    )
}

export default MenuBar;