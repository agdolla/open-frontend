"use strict";
exports.__esModule = true;
var React = require("react");
var path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
var emotion_server_1 = require("emotion-server");
var data_1 = require("./src/utils/data");
var route_1 = require("./src/utils/route");
var typescriptWebpackPaths = require('./webpack.config.js');
var TITLE = 'Postmates Open Source';
var ROOT_URL = 'http://localhost:3000'; // set this by environment
exports["default"] = {
    plugins: ['react-static-plugin-emotion'],
    entry: path.join(__dirname, 'src', 'index.tsx'),
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    getSiteData: function () { return ({
        title: TITLE
    }); },
    siteRoot: 'https://open.postmates.com',
    stagingSiteRoot: 'https://stage-open.postmates.com',
    getRoutes: function () {
        var teamRoutes = route_1.buildTeamRoutes(data_1.projects);
        var routes = [
            {
                path: '/',
                component: 'src/pages/ProjectPage',
                getData: function () { return ({
                    projects: data_1.projects
                }); }
            }
        ].concat(teamRoutes);
        // eslint-disable-next-line no-console
        console.log('Routes = ', routes);
        return routes;
    },
    renderToHtml: function (render, Comp) { return emotion_server_1.renderStylesToString(render(React.createElement(Comp, null))); },
    Document: function (_a) {
        var Html = _a.Html, Head = _a.Head, Body = _a.Body, children = _a.children, renderMeta = _a.renderMeta;
        return (React.createElement(Html, null,
            React.createElement(Head, null,
                React.createElement("title", null, TITLE),
                React.createElement("meta", { charSet: "UTF-8" }),
                React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
                React.createElement("link", { rel: "manifest", href: ROOT_URL + "/manifest.json" }),
                React.createElement("link", { rel: "shortcut icon", href: ROOT_URL + "/favicon.ico" }),
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
