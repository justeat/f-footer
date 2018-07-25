import ready from 'lite-ready';
import $ from 'qwery';
import { getBreakpoints } from '@justeat/fozzie';
import debounce from 'lodash.debounce';

let footerPanels;
let breakpoints = null;

const tabindexResize = () => {

    if (breakpoints === null) {
        breakpoints = getBreakpoints();
    }

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
    window.addEventListener('resize', debounce(tabindexResize, 100));
    footerPanels = $('[data-footer-panel-heading]');
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
