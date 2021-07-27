module.exports = {

  map: false,
  plugins: {
    'postcss-mixins': {
      mixins: {
        media: function (mixin, width) {
          return {
            [`@media (max-width: ${width})`]: {
              '@mixin-content': {}
            }
          }
        }
      }
    },
    'postcss-nested': {},
    'postcss-nesting': {}
  }
};


