import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { ProductCard } from './product-card.js';

import { createElement, createElementWithChildren } from '../utils/dom.js';
import { createFontAwesomeIcon } from '../utils/createIcon.js';
import { ICON_SIZE } from '../utils/constants.js';

export function ProductList({ products }, listTitle = 'Products') {
    const productCards = products.map(product => ProductCard({ product }));

    const sectionTitle = createElement('h2', 'text-3xl text-gray-900 font-bold items-center py-2', listTitle);
    const showAllBtn = createElement('button', 'text-md text-blue-700 font-bold  cursor-pointer', 'View All');
    const showAllIcon = createFontAwesomeIcon(faChevronRight, `${ICON_SIZE.small} text-blue-700`);
    const showAllWrapper = createElementWithChildren('div', 'flex flex-row gap-2 items-center  cursor-pointer', [showAllBtn, showAllIcon]);
    const sectionTitleWrapper = createElementWithChildren('div', 'flex flex-row justify-between', [sectionTitle, showAllWrapper]);

    const productList = createElementWithChildren('div', 'grid grid-cols-4 w-7xl gap-6 auto-rows-fr', [...productCards]);

    const productSection = createElementWithChildren('section', 'flex flex-col gap-6 mb-12', [sectionTitleWrapper, productList]);

    return productSection;
}