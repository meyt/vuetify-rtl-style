# vuetify-rtl-style [ALPHA]

Vuetify style overriding for RTL support


## Installation

```
npm install --save vuetify-rtl-style
```


## Usage

Just add `vuetify-rtl-style/dist/vuetify-rtl-style.min.css` after vuetify styles. 

### with Nuxt.js

`nuxt-config.js`:

```javascript
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  ...
  css: [
    'vuetify/dist/vuetify.min.css',
    'vuetify-rtl-style/dist/css/vuetify-rtl-style.min.css'
  ],
  ...
}

```

## Additional modifiers

- `.ltr, .ltr input`: Force LTR
- `.mirror-icon`: Filp icon horizontally
