
/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js
/* eslint-env node */

require('dotenv').config();
const env = require('./env');
const ESLintPlugin = require('eslint-webpack-plugin');
const nodePolyfillWebpackPlugin = require('node-polyfill-webpack-plugin');

module.exports = function(/* ctx */) {
    return {
        // https://quasar.dev/quasar-cli/supporting-ts
        supportTS: {
            tsCheckerConfig: {
                eslint: {
                    enabled: true,
                    files: './src/**/*.{ts,tsx,js,jsx,vue}',
                },
            },
        },

        // https://quasar.dev/quasar-cli/prefetch-feature
        // preFetch: true,

        // app boot file (/src/boot)
        // --> boot files are part of "main.js"
        // https://quasar.dev/quasar-cli/boot-files
        boot: ['ual', 'hyperion', 'i18n', 'api', 'telosApi', 'evm', 'q-component-defaults'],