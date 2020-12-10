// const path = require('path');
// const PrerenderSPAPlugin = require('prerender-spa-plugin');
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  runtimeCompiler: true
  /* configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/', '/colofon', '/copyright', '/result', '/notfound', '/step'],
        renderer: new Renderer({
          headless: true
        })
      })
    ]
  }*/
};
