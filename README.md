# `f-footer` – Fozzie Footer Component

[![npm version](https://badge.fury.io/js/%40justeat%2Ff-footer.svg)](https://badge.fury.io/js/%40justeat%2Ff-footer)
[![Build Status](https://travis-ci.org/justeat/f-footer.svg)](https://travis-ci.org/justeat/f-footer)
[![Dependency Status](https://gemnasium.com/badges/github.com/justeat/f-footer.svg)](https://gemnasium.com/github.com/justeat/f-footer)

Allows any project to install and use a variation of the Just Eat footer on their project.


## Usage

1. The easiest way to use fozzie modules in your Sass setup is to use [Eyeglass](https://www.npmjs.com/package/eyeglass).

If you are using the [fozzie gulp build tasks](https://www.npmjs.com/package/@justeat/gulp-build-fozzie), then Eyeglass is automatically setup ready to use.  If not, you can use it in one of the following ways:

- [Gulp](https://github.com/sass-eyeglass/eyeglass/blob/master/site-src/docs/integrations/gulp.md)
- [WebPack](https://github.com/sass-eyeglass/eyeglass/issues/153#issuecomment-300895607)

1.  Install the f-footer module using NPM or Yarn:

    ```bash
    yarn add @justeat/f-footer
    ```

1.  Then within your Sass files, you will need to import this module.

    ```scss
    @import 'f-footer';
    ```

You can then use the `f-footer` fozzie footer module styling.

## Shared Footer HTML

The footer HTML can be imported into your project using Handlebars.

The templates themselves are in the /footer folder in the /templates directory.

The data required to build the templates is in the /resources folder in the /templates directory, in the file footer.json. This contains all of the translations for the various tenants. The data is structured as an object, with each property in the object consisting of the data for one tenant.

When building the templates, the i18n Handlebars helper will use the data for the current tenant by iterating through the property items for the 'culture' that has been passed in via the model.

## Documentation to be completed once module is in stable state.
