import TestUtils from 'js-test-buddy';
import { collapseFooterPanels } from '../';

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

        // Assert
        const html = TestUtils.getBodyHtml();
        expect(html).toMatchSnapshot();
    });
});
