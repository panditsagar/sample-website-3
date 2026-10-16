const config = {
  devIndicators: false,
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/:page.html', destination: '/:page', permanent: true },
    ];
  },
};
export default config;
