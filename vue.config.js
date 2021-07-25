module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      template: './public/index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'projects': {
      entry: './src/pages/Projects/main.js',
      template: './public/index.html',
      title: "Projects",
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  }
}
