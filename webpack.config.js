const path = require('path');

module.exports = {
  mode: 'development',
//   entry: './server/bin/www.ts',
  entry: {
      'bin/www': './server/bin/www.ts',
      'routes/api.js':'./server/routes/api.ts',
      'routes/connectDb.js':'./server/routes/connectDb',
      'app.js':'./server/app.ts'
  },
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
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