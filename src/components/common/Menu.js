import React from 'react';
import { Link } from "gatsby"

import UI from './MenuStyle';
const MENU_LIST = [
    {
        label: "Stuff",
        href: "/",
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "About",
        href: "/about",
    },
];

const Menu = ({ currentPath, isShadow }) => {
    return (
        <UI.MenuList isShadow={isShadow}>
            {MENU_LIST.map((item, idx) => (
                <li>
                    <Link to={item.href}>
                        <UI.MenuLink isActive={idx === 0 ? currentPath === item.href : currentPath && currentPath.indexOf(item.href) === 0}>{item.label}</UI.MenuLink>
                    </Link>
                </li>
            ))}
        </UI.MenuList>
    );
}

export default Menu;