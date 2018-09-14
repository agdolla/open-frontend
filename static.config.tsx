import * as React from 'react';
import * as path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { renderStylesToString } from 'emotion-server';
import { projects } from './src/utils/data';
import { buildTeamRoutes } from './src/utils/route';

const typescriptWebpackPaths = require('./webpack.config.js');

const TITLE = 'Postmates Open Source';
const ROOT_URL = 'http://localhost:3000'; // set this by environment

interface DocumentProps {
  Html: React.ComponentClass;
  Head: React.ComponentClass;
  Body: React.ComponentClass;
  renderMeta: any;
  children: any;
}

export default {
  plugins: ['react-static-plugin-emotion'],
  entry: path.join(__dirname, 'src', 'index.tsx'),
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  getSiteData: () => ({
    title: TITLE,
  }),
  siteRoot: 'https://open.postmates.com',
  stagingSiteRoot: 'https://stage-open.postmates.com',
  getRoutes: () => {
    const teamRoutes = buildTeamRoutes(projects);
    const routes = [
      {
        path: '/',
        component: 'src/pages/ProjectPage',
        getData: () => ({
          projects,
        }),
      },
      ...teamRoutes,
    ];
    // eslint-disable-next-line no-console
    console.log('Routes = ', routes);
    return routes;
  },
  renderToHtml: (render, Comp) => renderStylesToString(render(<Comp />)),
  Document: ({ Html, Head, Body, children, renderMeta }: DocumentProps) => (
    <Html>
      <Head>
        <title>{TITLE}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href={`${ROOT_URL}/manifest.json`} />
        <link rel="shortcut icon" href={`${ROOT_URL}/favicon.ico`} />
        {/* Add social meta tags, sentry */}

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
