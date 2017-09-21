import ready from 'lite-ready';
import $ from 'qwery';


ready(() => {

    // Collapse the footer panels on page load
    $('[data-panel-collapsible]').forEach(panel => {
        panel.classList.add('is-collapsed');
    });

});
