"use strict";
exports.__esModule = true;
var React = require("react");
var path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
var route_1 = require("./src/utils/route");
var types_1 = require("./src/utils/types");
var data_1 = require("./data");
var typescriptWebpackPaths = require('./webpack.config.js');
var PRODUCTION_URL = 'https://postmates.com/open-source';
var STAGING_URL = 'https://awesome-lamarr-c46055.netlify.com';
exports["default"] = {
    plugins: ['react-static-plugin-emotion'],
    entry: path.join(__dirname, 'src', 'index.tsx'),
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    siteRoot: PRODUCTION_URL,
    stagingSiteRoot: STAGING_URL,
    getRoutes: function () {
        var siteRoot = process.env.NODE_ENV === 'production' ? PRODUCTION_URL : STAGING_URL;
        var teamRoutes = route_1.buildTeamRoutes(data_1.projects, siteRoot);
        var routes = [
            {
                path: '/',
                component: 'src/pages/ProjectPage.tsx',
                getData: function () { return ({
                    projects: data_1.projects,
                    title: types_1.Meta.Title,
                    description: types_1.Meta.Description,
                    url: siteRoot,
                    siteRoot: siteRoot
                }); }
            }
        ].concat(teamRoutes);
        // eslint-disable-next-line no-console
        console.log('Routes = ', routes.map(function (r) { return r.path; }));
        return routes;
    },
    Document: function (_a) {
        var Html = _a.Html, Head = _a.Head, Body = _a.Body, children = _a.children, renderMeta = _a.renderMeta;
        var siteRoot = process.env.NODE_ENV === 'production' ? PRODUCTION_URL : STAGING_URL;
        return (React.createElement(Html, null,
            React.createElement(Head, null,
                React.createElement("meta", { charSet: "UTF-8" }),
                React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
                React.createElement("link", { rel: "manifest", href: siteRoot + "/manifest.json" }),
                React.createElement("link", { rel: "shortcut icon", href: siteRoot + "/favicon.ico" }),
                React.createElement("script", { async: true, src: "https://www.googletagmanager.com/gtag/js?id=UA-27673166-11" }),
                React.createElement("script", { dangerouslySetInnerHTML: {
                        __html: "\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', 'UA-27673166-11');\n            "
                    } }),
                renderMeta.styleTags),
            React.createElement(Body, null, children)));
    },
    webpack: function (config, _a) {
        var defaultLoaders = _a.defaultLoaders;
        // eslint-disable-next-line no-param-reassign
        config.resolve.extensions = config.resolve.extensions.concat(typescriptWebpackPaths.resolve.extensions);
        // eslint-disable-next-line no-param-reassign
        config.resolve.alias = typescriptWebpackPaths.resolve.alias;
        config.module.rules[0].oneOf.unshift({
            test: /\.(t|j)sx?$/,
            exclude: defaultLoaders.jsLoader.exclude,
            use: [
                {
                    loader: 'babel-loader'
                },
                {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        happyPackMode: true
                    }
                },
            ]
        });
        return config;
    }
};
