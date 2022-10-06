const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  webpack: (config) => {
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
