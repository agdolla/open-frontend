import * as React from 'react';
import * as path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies 
import { buildTeamRoutes } from './src/utils/route';
import { projects } from './data';

const typescriptWebpackPaths = require('./webpack.config.js');

const TITLE = 'Postmates Open Source';
const ROOT_URL = 'http://localhost:3000'; // set this by environment

export default {
  plugins: ['react-static-plugin-emotion'],
  entry: path.join(__dirname, 'src', 'index.tsx'),
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  getSiteData: () => ({
    title: TITLE,
  }),
  // Note: Add these back once we have domain set up
  // siteRoot: 'https://open.postmates.com',
  stagingSiteRoot: 'https://awesome-lamarr-c46055.netlify.com',
  getRoutes: () => {
    const teamRoutes = buildTeamRoutes(projects);
    const routes = [
      {
        path: '/',
        component: 'src/pages/ProjectPage.tsx',
        getData: () => ({
          projects,
        }),
      },
      ...teamRoutes,
    ];
    // eslint-disable-next-line no-console
    console.log('Routes = ', routes.map(r => r.path));
    return routes;
  },
  Document: ({ Html, Head, Body, children, renderMeta }) => (
    <Html>
      <Head>
        <title>{TITLE}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href={`${ROOT_URL}/manifest.json`} />
        <link rel="shortcut icon" href={`${ROOT_URL}/favicon.ico`} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-27673166-11"></script>
        {/* Add social meta tags, sentry */}
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-27673166-11');
          `,
        }} />

        {renderMeta.styleTags}
      </Head>
      <Body>
        {children}
      </Body>
    </Html>
  ),
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
