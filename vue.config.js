// eslint-disable-next-line @typescript-eslint/no-var-requires
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['tsx'],
    },
    plugins: [new MonacoWebpackPlugin()],
  },
}
