import { faStar, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { createElement, createElementWithChildren } from '../utils/dom.js';
import { createFontAwesomeIcon } from '../utils/createIcon.js';
import { ICON_SIZE } from '../utils/constants.js';

export function ProductCard({ product }) {
    const { title, category, price, discountPercentage, rating, images } = product;
    const discount = Math.floor(discountPercentage);

    const discountStyles = discount > 0 ? 'bg-rose-200 text-pink-900' : 'bg-green-50 text-green-600';
    const discountText = discount > 0 ? `-${discount}%` : 'New';
    const productTag = createElement('span', `${discountStyles} absolute top-4 left-4 px-3 py-1 text-sm font-bold rounded-lg`, discountText);

    const productImage = createElement('img', 'w-full aspect-square object-fit select-none');
    productImage.src = images[0];
    productImage.alt = title;

    const productTitle = createElement('h3', 'text-lg font-bold text-gray-900 line-clamp-2', title);
    const productCategory = createElement('p', 'text-md text-gray-500 truncate', category[0].toUpperCase() + category.slice(1));

    const starIcon = createFontAwesomeIcon(faStar, `${ICON_SIZE.small} text-yellow-500 mt-0.5`);
    const productRating = createElement('span', 'text-md text-gray-500', rating.toFixed(1));
    const ratingWrapper = createElementWithChildren('div', 
        'flex flex-row items-center gap-2 font-semibold',
        [starIcon, productRating]
    );

    const productPrice = createElement('span', 'text-xl font-bold text-gray-900 bottom-4 left-4', price + '$');
    const productOldPrice = discount ? createElement('span', 'text-md text-gray-500 line-through ml-1', (price / (1 - (discount/100))).toFixed(2) + '$') : null;
    const cartIcon = createFontAwesomeIcon(faCartShopping, `${ICON_SIZE.medium} text-blue-700 opacity-80`);
    const addToCartBtn = createElementWithChildren('button', 'flex bg-blue-50 items-center justify-center rounded-xl w-12 h-12 ml-auto cursor-pointer hover:scale-110 hover:-translate-y-2 hover:shadow-xl transition-transform', [cartIcon]);
    const priceWrapper = createElementWithChildren('div', 'flex flex-row items-center mt-auto', [productPrice, productOldPrice, addToCartBtn]);

    const productInfoWrapper = createElementWithChildren('div', 
        'flex flex-col flex-1 gap-1 p-4',
        [productTitle, productCategory, ratingWrapper, priceWrapper]
    );

    const productCard = createElementWithChildren('article',
        'relative flex flex-col w-full rounded-2xl shadow-sm overflow-hidden bg-white border-1 border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer',
        [productTag, productImage, productInfoWrapper]
    );

    return productCard;
}; 