const withPlugins = require('next-compose-plugins');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const withImages = require('next-images');

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
    images: {
        disableStaticImages: true
    },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.module.rules.push({
          test: /\.s[ac]ss$/i,
          use: [
              "style-loader",
              "css-loader",
              "sass-loader"
          ],
      });
        //NEXT dont support compressing instead use Image from next/image
      // config.module.rules.push({
      //     test: /\.(png|jpe?g|webp|git|svg|)$/i,
      //     use: [
      //         {
      //             loader: 'img-optimize-loader',
      //             options: {
      //                 compress: {
      //                     mode: 'high',
      //                     webp: true,
      //                 },
      //             },
      //         }
      //     ]
      // });

      process.env.ANALYZE &&
      config.plugins.push(
          new BundleAnalyzerPlugin({
              analyzerMode: 'server',
              analyzerPort: 8088
          }),
      );

      config.plugins.push(
          new StylelintPlugin({
              files: '**/*.styled.(tsx|ts)',
              emitWarning: true,
              fix: true
          })
      );

      config.plugins.push(
          new ESLintPlugin({
              files: '**/*.(tsx|ts)',
              fix: true,
          }),
      );

      return config;
  },
};

module.exports = withPlugins([
    [withImages, { esModule: true }],
], nextConfig);

