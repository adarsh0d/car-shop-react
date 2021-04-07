import React, {FunctionComponent} from 'react';
import MenuBarLink from '../../types/MenuBarLink';


type MenuBarProps = {
    options: Array<MenuBarLink>
}

const MenuBar: FunctionComponent<MenuBarProps> = ({options}) => {
    return (
        <nav data-testid="menu">
            <ul>
                {options.map((option: MenuBarLink, i: number) => 
                    <li key={i}><a href={option.url}>{option.text}</a></li>
                )}
            </ul>
        </nav>
    )
}

export default MenuBar;