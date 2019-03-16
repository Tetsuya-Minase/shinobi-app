const path = require('path');
const glob = require('glob');

const entries = {};
glob.sync('./server/**/*.ts')
  .forEach(r => {
    // ファイルパスから不要なとこを消して、tsをjsに変更
    const key =r.split('/').splice(2).join('/').replace(/\.ts$/, '.js');
    entries[key] = r;
  });

module.exports = {
  mode: 'development',
  entry: entries,
  target: 'node',
  node: {
    __dirname: false
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "server"),
      'node_modules'
    ],
    extensions: [
      '.ts', '.js'
    ]
  },
  output: {
    // 出力するファイル名
    filename: '[name]',
    // filename: 'server.js',
    path: path.join(__dirname, 'app')
  }
};
