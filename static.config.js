import path from 'path';

const typescriptWebpackPaths = require('./webpack.config.js');

export default {
  plugins: ['react-static-plugin-emotion'],
  entry: path.join(__dirname, 'src', 'index.tsx'),
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  getSiteData: () => ({
    title: 'Postmates Open Source',
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/pages/Home',
    },
  ],
  webpack: (config, { defaultLoaders }) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.extensions = [
      ...config.resolve.extensions,
      ...typescriptWebpackPaths.resolve.extensions,
    ];

    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = typescriptWebpackPaths.resolve.alias;

    config.module.rules[0].oneOf.unshift({
      test: /\.(t|j)sx?$/,
      exclude: defaultLoaders.jsLoader.exclude,
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            happyPackMode: true,
          },
        },
      ],
    });

    return config;
  },
};
