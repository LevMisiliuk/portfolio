module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Вимикає оптимізацію зображень
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/works': { page: '/works' },
      '/works/undefined': { page: '/404' },
      '/undefined': { page: '/404' },
      '/works/blueauditor': { page: '/works/blueauditor' },
      '/works/farego': { page: '/works/farego' },
      '/works/vostokmedservice': { page: '/works/vostokmedservice' },
      '/works/sweetTv': { page: '/works/sweetTv' },
    };
  },
};
