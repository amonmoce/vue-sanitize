import sanitizeHtml from 'sanitize-html';

const VueSanitize = {
  install(Vue, options) {
    const defaultOptions = options;

    Vue.prototype.$sanitize = (dirty, opts = null) => sanitizeHtml(dirty, opts || defaultOptions);
  },

  defaults: sanitizeHtml.defaults,
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueSanitize);
}

export default VueSanitize;
