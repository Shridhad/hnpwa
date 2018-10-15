module.exports = {
  staticFileGlobs: [
    'manifest.json',
    'images/*',
    'src/**/*',
    'node_modules/normalize.css/normalize.css'
  ],
  runtimeCaching: [
    {
      urlPattern: /\/@webcomponents\/webcomponentsjs\//,
      handler: 'fastest'
    }
  ]
};
