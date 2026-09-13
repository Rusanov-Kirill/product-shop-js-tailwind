import { faBars, faUser, faShoppingCart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { createElement, createElementWithChildren } from '../utils/dom.js';
import { createFontAwesomeIcon } from '../utils/createIcon.js';
import { ICON_SIZE, NAV_LINKS, ASSETS } from '../utils/constants.js';

export function Header() {
    const menuIcon = createFontAwesomeIcon(faBars, `${ICON_SIZE.medium} text-gray-900 hover:text-blue-700 cursor-pointer`);
    const menuBtn = createElementWithChildren('button', 'flex items-center text-gray-900 p-2 h-fit self-center lg:hidden', [menuIcon]);

    const logo = createElement('img', 'w-auto h-16 justify-self-center self-center select-none cursor-pointer md:h-20 lg:h-22');
    logo.src = ASSETS.logo;
    logo.alt = 'NovaCart Logo';

    const nav = createElementWithChildren('nav', 'hidden justify-between items-center font-medium text-lg lg:flex lg:gap-6 xl:gap-12', [
        ...NAV_LINKS.map(linkText => {
            const link = createElement('a', `flex p-2 cursor-pointer hover:text-blue-700 ${linkText === 'Home' ? 'relative text-blue-700 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-700' : 'text-gray-900'}`, linkText);
            return link;
        })
    ]);

    const loupeIcon = createFontAwesomeIcon(faMagnifyingGlass, `${ICON_SIZE.medium} text-gray-900 cursor-pointer hover:text-blue-700`);
    const loupeBtn = createElementWithChildren('button', 'flex items-center justify-center text-gray-900 p-2', [loupeIcon]);
    const userIcon = createFontAwesomeIcon(faUser, `${ICON_SIZE.medium} text-gray-900 cursor-pointer group-hover:text-blue-700`);
    const userText = createElement('span', 'text-gray-900 cursor-pointer group-hover:text-blue-700', 'Sign In');
    const userWrapper = createElementWithChildren('div', 'hidden group gap-2 p-2 items-center cursor-pointer md:flex md:text-sm xl:text-base', [userIcon, userText]);
    const cartIcon = createFontAwesomeIcon(faShoppingCart, `${ICON_SIZE.medium} text-gray-900 cursor-pointer hover:text-blue-700`);
    const cartBadge = createElement('span', 'absolute flex -top-1 -right-1 bg-blue-700 text-white text-xs rounded-full w-5.5 h-5.5 items-center justify-center', '0');
    const cartBtn = createElementWithChildren('button', 'relative flex items-center justify-center text-gray-900 p-2', [cartIcon, cartBadge]);
    const actionsWrapper = createElementWithChildren('div', 'flex gap-2 items-center justify-end font-medium text-lg', [loupeBtn, userWrapper, cartBtn]);

    const header = createElementWithChildren('header', 'bg-white grid grid-cols-[1fr_3fr_1fr] h-fit px-4 my-4 md:grid-cols-[1fr_1.5fr_1fr] lg:flex lg:w-5xl lg:mx-auto lg:px-6 lg:justify-between xl:w-7xl', [menuBtn, logo, nav, actionsWrapper]);

    return header;
}   