import { icon } from '@fortawesome/fontawesome-svg-core';

export function createFontAwesomeIcon(iconDefinition, className = '') {
    const svgString = icon(iconDefinition).html;
    
    const wrapper = document.createElement('div');
    wrapper.innerHTML = svgString;
    const svg = wrapper.firstElementChild;

    if (className) {
        svg.setAttribute('class', className);
    }
    
    return svg;
}