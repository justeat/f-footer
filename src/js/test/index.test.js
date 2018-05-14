import TestUtils from 'js-test-buddy';
import { collapseFooterPanels, resizeInit } from '../';

beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
        value: jest.fn(() => ({ matches: true }))
    });
});

describe('on page load', () => {

    it('footer panels are collapsed', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <div class="c-footer-panel" data-panel-collapsible="">
                <h2>
                    Header text
                </h2>
            </div>
        `);

        // Act
        collapseFooterPanels();
        const html = TestUtils.getBodyHtml();

        // Assert
        expect(html).toMatchSnapshot();
    });

    describe('at narrow width', () => {

        beforeEach(() => {
            // Force matchMedia in tabindexResize to fail
            Object.defineProperty(window, 'matchMedia', {
                value: jest.fn(() => ({ matches: false }))
            });
        });

        it('tabindex should not be removed from footer panel headings', () => {
            // Arrange
            TestUtils.setBodyHtml(`
                <div class="c-footer-panel" data-panel-collapsible="">
                    <h2 data-footer-panel-heading tabindex="0">
                        Header text
                    </h2>
                </div>
            `);

            // Act
            resizeInit();
            const html = TestUtils.getBodyHtml();

            // Assert
            expect(html).toMatchSnapshot();
        });

        it('tabindex should be added to footer panel headings if it is not present', () => {
            // Arrange
            TestUtils.setBodyHtml(`
                <div class="c-footer-panel" data-panel-collapsible="">
                    <h2 data-footer-panel-heading>
                        Header text
                    </h2>
                </div>
            `);

            // Act
            resizeInit();
            const html = TestUtils.getBodyHtml();

            // Assert
            expect(html).toMatchSnapshot();
        });
    });

    describe('at normal width', () => {

        it('tabindex should be removed from footer panel headings', () => {
            // Arrange
            TestUtils.setBodyHtml(`
                <div class="c-footer-panel" data-panel-collapsible="">
                    <h2 data-footer-panel-heading tabindex="0">
                        Header text
                    </h2>
                </div>
            `);

            // Act
            resizeInit();
            const html = TestUtils.getBodyHtml();

            // Assert
            expect(html).toMatchSnapshot();
        });
    });
});
