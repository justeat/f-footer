import ready from 'lite-ready';
import $ from 'qwery';


const footer = () => {

    // this kicks off when the page is ready
    ready(() => {

        // Collapse the footer panels on page load
        $('[data-panel-collapsible]').forEach(panel => {
            panel.classList.add('is-collapsed');
        });

    });

};

footer();
