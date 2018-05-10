import ready from 'lite-ready';
import $ from 'qwery';
import { getBreakpoints } from '@justeat/fozzie';
import throttle from 'lodash.throttle';

let footerPanels;
let breakpoints;

const tabindexResize = () => {
    if (window.matchMedia(`(min-width: ${breakpoints.mid})`).matches) {
        footerPanels.forEach(panel => {
            panel.removeAttribute('tabindex');
        });
    } else {
        footerPanels.forEach(panel => {
            panel.tabIndex = 0;
        });
    }
};

const collapseFooterPanels = () => {
    $('[data-panel-collapsible]').forEach(panel => {
        panel.classList.add('is-collapsed');
    });
};

const resizeInit = () => {
    window.addEventListener('resize', throttle(tabindexResize, 100));
    footerPanels = $('.c-footer-panel > h2');
    breakpoints = getBreakpoints();
    tabindexResize();
};

ready(() => {
    collapseFooterPanels();
    resizeInit();
});

export {
    collapseFooterPanels,
    tabindexResize,
    resizeInit
};
