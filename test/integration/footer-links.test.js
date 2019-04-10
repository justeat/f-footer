import content from '../../src/templates/resources/footer.json';
import { request } from '../utils';

const categories = [
    'links',
    'aboutUsLinks',
    'cuisineLinks',
    'locationLinks'
];

const tenants = {
    // 'da-DK': 'https://www.just-eat.dk',
    'en-GB': 'https://www.just-eat.co.uk',
    // 'en-AU': 'https://www.menulog.com.au',
    // 'en-NZ': 'https://www.menulog.co.nz/',
    // 'en-IE': 'https://www.just-eat.ie',
    // 'es-ES': 'https://www.just-eat.es',
    // 'it-IT': 'https://www.justeat.it',
    // 'nb-NO': 'https://www.just-eat.no'
};

// This is a manually run test
describe.skip('Footer links', () => {
    const languages = Object.keys(tenants);
    languages.forEach(language => {
        const baseUrl = tenants[language];
        categories.forEach(category => {
            describe(`${language}: ${category}`, () => {
                const links = content[language][category];
                links.forEach(link => {
                    // ignore absolute links
                    if (link.url.includes('http')) return;
                    it(`should return 200 for ${link.text}`, async () => {
                        const fullUrl = `${baseUrl}${link.url}`;
                        const { status } = await request(fullUrl);
                        expect(status).toEqual(200);
                    });
                });
            });
        });
    });
});
