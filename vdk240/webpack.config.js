const path = require('path');

module.exports = {
    entry: ['./scripts/app.ts', './scripts/liveChart.ts', './scripts/mqtt.ts'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'wwwroot/js'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use:[
                {
                  loader: 'ts-loader',
                  options: {
                    configFile: 'tsconfig.json'
                  }
                }
            ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
