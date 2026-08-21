import { faArrowRight, faTruck } from '@fortawesome/free-solid-svg-icons';
import { PercentIcon } from '../assets/icons/percent.js';

import { createElement, createElementWithChildren } from '../utils/dom.js';
import { createFontAwesomeIcon } from '../utils/createIcon.js';
import { ICON_SIZE, ASSETS, BENEFITS } from '../utils/constants.js';

export function HeroSection() {
    const truckIcon = createFontAwesomeIcon(faTruck, `${ICON_SIZE.large} text-blue-700`);
    const truckWrapper = createElementWithChildren('div', 'absolute flex items-center justify-center bg-white rounded-xl w-20 h-20 bottom-[12%] right-[45%] shadow-md', [truckIcon]);

    const percentWrapper = createElement('div', 'absolute flex items-center justify-center bg-gradient-to-tr from-[#9486f9] to-[#e9d5ff] text-white rounded-xl w-20 h-20 bottom-[75%] right-[44%]');
    percentWrapper.insertAdjacentHTML('beforeend',
        PercentIcon.replace('<svg', `<svg class="${ICON_SIZE.xxl}"`)
    );

    const heroTitleColored = createElement('span', 'text-blue-700', 'your life');
    const heroTitle = createElementWithChildren('h1', 'text-6xl font-bold text-gray-900 leading-tight', [heroTitleColored], 'The best products for ');

    const heroSubtitle = createElement('p', 'text-2xl text-gray-500', 'Quality products at affordable prices with fast delivery nationwide');

    const arrowIcon = createFontAwesomeIcon(faArrowRight, `${ICON_SIZE.small} self-center ml-2 mt-0.5`);
    const actionBtnStyles = 'flex text-lg rounded-lg border-2 border-blue-700 h-12 items-center justify-center px-12 py-7 font-bold cursor-pointer';
    const catalogButton = createElementWithChildren('button', `${actionBtnStyles} bg-blue-700 text-white`, [arrowIcon], 'Go to Catalog');
    const learnMoreButton = createElement('button', `${actionBtnStyles} bg-transparent text-blue-700 `, 'Learn More');
    const actionsWrapper = createElementWithChildren('div', 'flex flex-row gap-6', [catalogButton, learnMoreButton]);

    const heroContentWrapper = createElementWithChildren('div', ' absolute flex flex-col w-1/2 h-full p-12 justify-center gap-8', [heroTitle, heroSubtitle, actionsWrapper]);

    const heroSectionBanner = createElementWithChildren('div', `relative flex w-7xl bg-cover bg-center min-h-[65vh] rounded-3xl`, [heroContentWrapper, truckWrapper, percentWrapper]);
    heroSectionBanner.style.backgroundImage = `url(${ASSETS.hero_background})`;

    const benefitsWrapper = createElementWithChildren('div', 'flex flex-row w-7xl h-36 gap-6 border-gray-100 border-1 rounded-3xl justify-between items-center px-12 py-6', [
        ...BENEFITS.map(benefit => {
            const benefitIcon = createFontAwesomeIcon(benefit.icon, `${ICON_SIZE.large} text-blue-700 opacity-80`);
            const benefitIconWrapper = createElementWithChildren('div', 'flex items-center justify-center bg-blue-50 rounded-xl w-16 h-16', [benefitIcon]);
            const benefitTitle = createElement('h3', 'text-lg font-bold text-gray-900', benefit.title);
            const benefitDescription = createElement('p', 'text-gray-500', benefit.description);
            const benefitContentWrapper = createElementWithChildren('div', 'flex flex-col', [benefitTitle, benefitDescription]);
            const benefitWrapper = createElementWithChildren('div', 'flex flex-row gap-4 items-center', [benefitIconWrapper, benefitContentWrapper]);
            return benefitWrapper;
        })
    ]);  

    const heroSection = createElementWithChildren('section', 'relative flex flex-col w-7xl h-fit my-10 gap-4', [heroSectionBanner, benefitsWrapper]);

    return heroSection;
} 