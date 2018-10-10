import * as React from 'react';
import * as path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { buildTeamRoutes } from './src/utils/route';
import { Meta } from './src/utils/types';
import { projects } from './data';

const typescriptWebpackPaths = require('./webpack.config.js');

const PRODUCTION_URL = 'https://open.postmates.com';
const STAGING_URL = 'https://awesome-lamarr-c46055.netlify.com';

export default {
  plugins: ['react-static-plugin-emotion'],
  entry: path.join(__dirname, 'src', 'index.tsx'),
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  siteRoot: PRODUCTION_URL,
  stagingSiteRoot: STAGING_URL,
  getRoutes: () => {
    const siteRoot = process.env.NODE_ENV === 'production' ? PRODUCTION_URL : STAGING_URL;
    const teamRoutes = buildTeamRoutes(projects, siteRoot);
    const routes = [
      {
        path: '/',
        component: 'src/pages/ProjectPage.tsx',
        getData: () => ({
          projects,
          title: Meta.Title,
          description: Meta.Description,
          url: siteRoot,
          siteRoot,
        }),
      },
      ...teamRoutes,
    ];
    // eslint-disable-next-line no-console
    console.log('Routes = ', routes.map(r => r.path));
    return routes;
  },
  Document: ({ Html, Head, Body, children, renderMeta }) => {
    const siteRoot = process.env.NODE_ENV === 'production' ? PRODUCTION_URL : STAGING_URL;
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="manifest" href={`${siteRoot}/manifest.json`} />
          <link rel="shortcut icon" href={`${siteRoot}/favicon.ico`} />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-27673166-11" />
          {/* Add Sentry, analytics */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-27673166-11');
            `,
            }}
          />

          {renderMeta.styleTags}
        </Head>
        <Body>{children}</Body>
      </Html>
    );
  },
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
