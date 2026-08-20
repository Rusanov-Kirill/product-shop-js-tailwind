import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { createElement, createElementWithChildren } from '../utils/dom.js';
import { createFontAwesomeIcon } from '../utils/createIcon.js';
import { ICON_SIZE, NAV_LINKS, ASSETS } from '../utils/constants.js';

export function Header() {
    const logo = createElement('img', 'w-64 h-auto select-none cursor-pointer');
    logo.src = ASSETS.logo;
    logo.alt = 'NovaCart Logo';

    const nav = createElementWithChildren('nav', 'flex justify-beetween items-center gap-12 font-medium text-lg', [
        ...NAV_LINKS.map(linkText => {
            const link = createElement('a', `flex p-2 cursor-pointer hover:text-blue-700 ${linkText === 'Home' ? 'relative text-blue-700 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-700' : 'text-gray-900'}`, linkText);
            return link;
        })
    ]);

    const userIcon = createFontAwesomeIcon(faUser, `${ICON_SIZE.medium} text-gray-900 cursor-pointer group-hover:text-blue-700`);
    const userText = createElement('span', 'text-gray-900 p-2 cursor-pointer group-hover:text-blue-700', 'Sign In');
    const userWrapper = createElementWithChildren('div', 'group flex gap-2 p-2 items-center cursor-pointer', [userIcon, userText]);
    const cartIcon = createFontAwesomeIcon(faShoppingCart, `${ICON_SIZE.medium} text-gray-900 cursor-pointer hover:text-blue-700`);
    const actionsWrapper = createElementWithChildren('div', 'flex gap-10 items-center font-medium text-lg', [userWrapper, cartIcon]);

    const header = createElementWithChildren('header', 'bg-white flex w-7xl h-fit justify-between items-center', [logo, nav, actionsWrapper]);

    return header;
}   