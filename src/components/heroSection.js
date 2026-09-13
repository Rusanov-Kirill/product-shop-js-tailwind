import { faArrowRight, faTruck } from '@fortawesome/free-solid-svg-icons';
import { PercentIcon } from '../assets/icons/percent.js';

import { createElement, createElementWithChildren } from '../utils/dom.js';
import { createFontAwesomeIcon } from '../utils/createIcon.js';
import { ICON_SIZE, ASSETS, BENEFITS, DESKTOP_MQ } from '../utils/constants.js';

export function HeroSection() {
    const mql = window.matchMedia(DESKTOP_MQ);

    const truckIcon = createFontAwesomeIcon(faTruck, `${ICON_SIZE.medium} text-blue-700 md:w-8 md:h-8`);
    const truckWrapper = createElementWithChildren('div', 'absolute flex items-center justify-center bg-white rounded-xl w-12 h-12 shadow-md sm:w-16 sm:h-16 lg:w-20 lg:h-20', [truckIcon]);

    const percentWrapper = createElement('div', 'absolute flex items-center justify-center bg-gradient-to-tr from-[#9486f9] to-[#e9d5ff] text-white rounded-xl w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20');
    percentWrapper.insertAdjacentHTML('beforeend',
        PercentIcon.replace('<svg', `<svg class="${ICON_SIZE.large} lg:w-12 lg:h-12"`)
    );

    const heroTitleColored = createElement('span', 'text-blue-700', 'your life');
    const heroTitle = createElementWithChildren('h1', 'text-3xl font-bold text-gray-900 leading-tight md:w-3/7 lg:w-full lg:text-5xl xl:text-6xl', [heroTitleColored], 'The best products for ');

    const heroSubtitle = createElement('p', 'text-lg text-gray-500 md:w-3/7 md:text-xl lg:text-2xl lg:w-full', 'Quality products at affordable prices with fast delivery nationwide');

    const heroTextWrapper = createElementWithChildren('div', 'flex flex-col w-3/4 m-4 gap-2 md:w-1/2 lg:w-1/3 lg:gap-4 lg:m-8 lg:mb-0 xl:w-2/5', [heroTitle, heroSubtitle]);

    const arrowIcon = createFontAwesomeIcon(faArrowRight, `${ICON_SIZE.small} self-center ml-2 mt-0.5`);
    const actionBtnStyles = 'flex text-base rounded-lg h-12 items-center justify-center px-12 py-4 font-bold cursor-pointer md:text-lg lg:py-7';
    const catalogButton = createElementWithChildren('button', `${actionBtnStyles} bg-blue-700 text-white`, [arrowIcon], 'Go to Catalog');
    const learnMoreButton = createElement('button', `${actionBtnStyles} bg-white text-blue-700`, 'Learn More');
    const actionsWrapper = createElementWithChildren('div', 'flex flex-col gap-4 lg:w-1/3 lg:m-8 lg:mt-0 xl:w-2/5 xl:flex-row xl:justify-between', [catalogButton, learnMoreButton]);

    const heroContentWrapper = createElementWithChildren('div', ' absolute flex flex-col w-full h-full p-4 gap-8 justify-between lg:justify-center', [heroTextWrapper, actionsWrapper]);

    const heroSectionBanner = createElementWithChildren('div', `relative flex bg-cover bg-bottom min-h-[600px] rounded-3xl xs:bg-[position:100%70%] sm:bg-[position:100%_65%]`, [heroContentWrapper, truckWrapper, percentWrapper]);

    const applyLayout = (isDesktop) => {
        heroSectionBanner.style.backgroundImage = `url(${isDesktop ? ASSETS.hero_background_horizontal : ASSETS.hero_background_vertical})`;

        truckWrapper.classList.toggle('truck-icon', !isDesktop);
        truckWrapper.classList.toggle('truck-icon-desktop', isDesktop);

        percentWrapper.classList.toggle('percent-icon', !isDesktop);
        percentWrapper.classList.toggle('percent-icon-desktop', isDesktop);
    };

    const onChange = (e) => applyLayout(e.matches);
    applyLayout(mql.matches);
    mql.addEventListener('change', onChange);
    
    const benefitsWrapper = createElementWithChildren('ul', 'grid grid-cols-1 h-auto gap-6 border-gray-100 border-1 rounded-3xl justify-between items-center px-6 py-6 md:grid-cols-2 xl:grid-cols-4', [
        ...BENEFITS.map(benefit => {
            const benefitIcon = createFontAwesomeIcon(benefit.icon, `${ICON_SIZE.medium} text-blue-700 opacity-80 lg:w-8 lg:h-8`);
            const benefitIconWrapper = createElementWithChildren('div', 'flex items-center justify-center bg-blue-50 rounded-xl w-12 h-12 lg:w-16 lg:h-16', [benefitIcon]);
            const benefitTitle = createElement('h3', 'text-lg font-bold text-gray-900', benefit.title);
            const benefitDescription = createElement('p', 'text-gray-500', benefit.description);
            const benefitContentWrapper = createElementWithChildren('div', 'flex flex-col', [benefitTitle, benefitDescription]);
            const benefitWrapper = createElementWithChildren('li', 'flex flex-row gap-4 items-center', [benefitIconWrapper, benefitContentWrapper]);
            return benefitWrapper;
        })
    ]);  

    const heroSection = createElementWithChildren('section', 'relative flex flex-col px-4 h-fit mb-4 my-10 gap-4', [heroSectionBanner, benefitsWrapper]);
    heroSection._cleanup = () => mql.removeEventListener('change', onChange);

    return heroSection;
} 