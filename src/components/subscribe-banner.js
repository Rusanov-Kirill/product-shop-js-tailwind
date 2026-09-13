import { createElement, createElementWithChildren } from "../utils/dom";
import { ASSETS } from "../utils/constants";

export function SubscribeBanner() {
    const giftImage = createElement('img', 'w-32 aspect-[4/3] object-fit select-none');
    giftImage.src = ASSETS.subscribe_banner_image;

    const bannerTitle = createElement('h3', 'text-lg text-gray-900 font-bold', 'Sign up and get 5% off');
    const bannerSubtitle = createElement('p', 'text-md text-gray-500 font-bold', 'Be the first to get exclusive deals and new products');
    const bannerTextWrapper = createElementWithChildren('div', 'flex flex-col gap-2', [bannerTitle, bannerSubtitle]);

    const subscribeMailInput = createElement('input', 'w-72 h-fit text-md text-gray-500 font-semibold bg-white py-3 px-4 rounded-lg border-1 border-gray-200 focus:outline-none');
    subscribeMailInput.placeholder = 'Your Email';
    subscribeMailInput.type = 'email';
    const subscribeBtn = createElement('button', 'h-fit text-md text-white bg-blue-700 font-bold py-3 px-12 rounded-lg cursor-pointer', 'Subscribe');
    const subscribeForm = createElementWithChildren('div', 'flex flex-row items-center gap-6 ml-auto', [subscribeMailInput, subscribeBtn]);

    const subscribeBanner = createElementWithChildren('section', 'flex flex-row items-center w-7xl h-fit rounded-xl bg-blue-50 p-6 mb-12', [giftImage, bannerTextWrapper, subscribeForm]);

    return subscribeBanner;
}