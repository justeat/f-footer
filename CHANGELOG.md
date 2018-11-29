# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

v1.8.2
------------------------------
*November 29, 2018*

### Fixed
- Fixed incorrect footer links and link text.

v1.8.1
------------------------------
*November 10, 2018*

### Fixed
- Adding missing Danish, Italian and Norwegian translations.
- Updated the casing of the pseudo-locale language code so it works with .NET Core on Linux.


v1.8.0
------------------------------
*November 6, 2018*

### Added
- Svg sprite handlebars partial

### Changed
- Flags, misc and social icons are calling from svg sprite instead of regular img tag.

This version needs WebBoilerplate >= v1.0.41


v1.7.0
------------------------------
*October 29, 2018*

### Changed
- Css style of social media icons regarding new design

### Removed
- Social media icons (now new icons live in f-icons module)


v1.6.0
------------------------------
*October 27, 2018*

### Changed
- Updated an `http` link to use `https`.

### Fixed
- Adding missing Spanish translations.


v1.5.0
------------------------------
*October 16, 2018*

### Changed
- Switched `kickoff-utils` package for the `@justeat/f-utils` package (SCSS helpers).
- Updated `fozzie` and `fozzie-colour-palette` versions so Menulog theming cascades into `f-footer`.
- Minor package updates.

### Removed
- Babel 7 dependencies removed from `package.json` (as now installed as part of `gulp-build-fozzie`).


v1.4.2
------------------------------
*October 11, 2018*

### Fixed
- Fixed slack key for Travis build results publishing.


v1.4.1
------------------------------
*October 11, 2018*

### Changed
- Travis build results published to slack channel.


v1.4.0
------------------------------
*October 11, 2018*

### Changed
- Upgraded to babel 7.
- Updated module dependencies.
- Travis uses node v8 & v10 to run builds.

### Fixed
- Travis build fixed by regenerating the yarn lock file.
- Lint parsing error fixed by adding "espree" resolution.


v1.3.1
------------------------------
*October 5, 2018*

### Fixed
- Fixed "currentCountryFlagIconUrl" to match GB flag


v1.3.0
------------------------------
*September 27, 2018*

### Fixed
- Fixed direction of `c-footer-panel` chevon


v1.2.0
------------------------------
*September 27, 2018*

### Added
- Added `en-` social icons alt text

v1.1.1
------------------------------
*September 7, 2018*

### Fixed
- Danish work for us translation



v1.1.0
------------------------------
*August 29, 2018*

### Changed
- Switched footer docs JSON language to english.


v1.0.1
------------------------------
*August 29, 2018*

### Changed
- Added pseudo-locale `qps-ploc` for localisation testing on Windows.


v1.0.0
------------------------------
*August 28, 2018*

### Changed
- Bumped to version 1.0.0 for release version.


v0.35.2
------------------------------
*August 16, 2018*

### Changed
- Updated PR template.


v0.35.1
------------------------------
*August 10, 2018*

### Changed
- Feedback logo component class changed to `c-footer-feedbackLogo`


v0.35.0
------------------------------
*August 6, 2018*

### Added
- Feedback component added, made invisible by default


v0.34.0
------------------------------
*August 1, 2018*

### Removed
- Got rid of some of the footer translations that aren't used or needed by the view templates


v0.33.0
------------------------------
*July 27, 2018*

### Added
- Added `data-gtm-feedback` attribute to the feedback element for use by other scripts to show/hide it.


v0.32.0
------------------------------
*July 24, 2018*

### Fixed
- Fix `TypeError` caused by `getBreakpoints()` being called before the document is ready


v0.31.0
------------------------------
*July 24, 2018*

### Fixed
- Links to `www.eat.ch` now use `https` instead of `http`


v0.30.0
------------------------------
*July 5, 2018*

### Added
- Added UK Modern Slavery Statement footer resource
- Added target attribute to UK "aboutUsLinks" footer section

### Fixed
- Fixed the order and labels in UK "aboutUsLinks" footer section


v0.29.0
------------------------------
*June 19, 2018*

### Added
- Added Australia and New Zealand footer resources


v0.28.0
------------------------------
*June 05, 2018*

### Fixed
- `chevronIconUrl` to be `miscIconPaths.chevronIconUrl` so it matches the footer model.


v0.27.0
------------------------------
*June 05, 2018*

### Fixed
- `chevronUrl` renamed to `chevronIconUrl` to match template shared footer model.


v0.26.0
------------------------------
*May 29, 2018*

### Changed
- Add in translations for accessibility work


v0.25.0
------------------------------
*May 25, 2018*

### Changed
- Fix snapshot for failing test


v0.24.0
------------------------------
*May 25, 2018*

### Changed
- Restructure the footer.json file to remove dependency on parent project data.
- Update the handlebars files to allow the i18n handlebars helper to work in list iterations.
- Integrate lookup helper to import data via the model passed in to the template loader


v0.23.0
------------------------------
*May 21, 2018*

### Changed
- Updated unit test snapshots to get the tests passing.
- Updated docs data.

### Fixed
- Fixed localised country name for current country.
- Fixed translation keys for AU/NZ.


v0.21.0
------------------------------
*May 14, 2018*

### Added
- Tabbing to footer headings in mobile view to allow the accordions to be opened.
- Unit tests for the JavaScript.
- Dependencies on `fozzie` and `lodash.debounce` and `js-test-buddy`.
- `jest.setup.js`


v0.20.0
------------------------------
*May 11, 2018*

### Changed
- Updating package dependencies


v0.19.0
------------------------------
*May 4, 2018*

### Added
- Descriptive international translations for country selector when using a screen reader.

### Changed
- The cross in the country selector is now a button and can be accessed via tabbing.


v0.18.2
------------------------------
*May 2, 2018*

### Changed
- Add the templates directory to the package.json.


v0.18.1
------------------------------
*April 25, 2018*

### Changed
- Tweak margin and padding for `.c-footer-row--light` class.


v0.18.0
------------------------------
*April 24, 2018*

### Added
- Handlebars partials
- Sample data for docs in `footer-docs-data.json`.
- Footer translations to `footer.json`.

### Changed
- Country selector link is now a button


v0.17.0
------------------------------
*February 14, 2018*

### Added
- `icon-youtube.svg`


v0.16.0
------------------------------
*January 29, 2018*

### Changed
- Updated `browserlist` in `package.json`
- Updated to use `babel-preset-env`
- Upgrading package dependencies (minor updates)


v0.15.0
------------------------------
*January 17, 2018*

### Added
- `dangerfile.js` added to check PRs via Travis

### Changed
- Updated `gulp-build-fozzie` and `fozzie-colour-palette` versions


v0.14.1
------------------------------
*September 27, 2017*

### Changed
- Fixed `"files"` values in `package.json`.


v0.14.0
------------------------------
*September 26, 2017*

### Changed
- Added `"files"` property to `package.json` to explicitly state which files should be published.


v0.13.0
------------------------------
*September 26, 2017*

### Changed
- Fixed copy assets path.


v0.12.0
------------------------------
*September 26, 2017*

### Removed
- Removed icons — they now live in the [`f-icons`](https://github.com/justeat/f-icons) module.


v0.11.0
------------------------------
*September 26, 2017*

### Changed
- Updated footer styles.


v0.10.0
------------------------------
*September 22, 2017*

### Changed
- Updated footer styles.


v0.9.0
------------------------------
*September 21, 2017*

### Changed
- Updated icons styles.


v0.8.1
------------------------------
*September 20, 2017*

### Changed
- Removed redundant Javascript object wrapper.
- Tidied up link npm scripts.
- Updated Travis config.


v0.8.0
------------------------------
*September 20, 2017*

### Added
- Added Javascript behaviour which controls how the footer behaves on page load.
- Added Javascript lint npm script.
- Added Javascript compile task.
- Javascript is transpiled when package is deployed.


v0.7.0
------------------------------
*September 20, 2017*

### Changed
- Moved build packages in `devDependencies`.
- Upgraded `gulp-build-fozzie` package.


v0.6.0
------------------------------
*September 20, 2017*

### Changed
- Updated flag icons to use viewbox.
- Set app icon widths in CSS.
- Updated footer panel CSS.


v0.5.0
------------------------------
*September 19, 2017*

### Changed
- Replaced `png` certificate image with `SVG` version.
- Updated certificate styles.


v0.4.0
------------------------------
*September 19, 2017*

### Changed
- Replaced `png` flag images with `SVG` versions.


v0.3.1
------------------------------
*September 05, 2017*

### Added
- Updated updated footer images.


v0.3.0
------------------------------
*September 05, 2017*

### Changed
- Updated country selector styles.


v0.2.1
------------------------------
*September 04, 2017*

### Changed
- Danish flag filename updated.


v0.2.0
------------------------------
*September 01, 2017*

### Added
- Added country selector styles.
- Added cross icon.


v0.1.1
------------------------------
*September 01, 2017*

### Added
- Added footer images and configured package to export the images via `f-copy-assets`.


v0.1.0
------------------------------
*August 31, 2017*

### Added
- Added footer styles.

### Changed
- Updated package dependencies.


v0.0.1
------------------------------
*August 21, 2017*

### Added
- Added initial package files.
