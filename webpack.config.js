var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals:{
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      applicationStyles: 'app/styles/app.scss',
      Nav : 'app/components/Nav.jsx',
      Links : "app/components/Links.jsx",
      Books : "app/components/Books.jsx",
      Twitter : "app/components/Twitter.jsx",
      Talks : "app/components/Talks.jsx",
      Icons : "app/components/Icons.jsx",
      Colours : "app/components/Colours.jsx",
      UXDesignersWebsites : "app/components/UXDesignersWebsites.jsx",
      Guidelines : "app/components/Guidelines.jsx",
      Prototyping : "app/components/Prototyping.jsx",
      ResearchTools : "app/components/ResearchTools.jsx",
      Design : "app/components/Design.jsx",
      Collaboration : "app/components/Collaboration.jsx",
      UserFlows : "app/components/UserFlows.jsx",
      Articles : "app/components/Articles.jsx",
      TimeBoxing : "app/components/TimeBoxing.jsx",
      Miscellany : "app/components/Miscellany.jsx"
    },
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015','stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
};
