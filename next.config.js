/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(
      new CopyPlugin({
        patterns: [{ from: '_posts', to: '_posts' }],
      })
    );

    // Important: return the modified config
    return config;
  },
};
