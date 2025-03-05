const commonConfig = require('./webpack.config');
const { merge } = require('webpack-merge');
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const ModuleFedrationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  []);

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/career/latest/',
    },
    resolve: {
        alias: {
          ...sharedMappings.getAliases(),
        }
    },
    plugins: [
        new ModuleFedrationPlugin({
            name: 'careerApp',
            filename: 'remoteEntry.js',
            exposes: {
                './CareerApp': './src/bootstrap',
            },
            shared: share({
                "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
                "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
                "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
                "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
                "zone.js": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      
                ...sharedMappings.getDescriptors()
            })
        }),
        sharedMappings.getPlugin()
    ],
};

// module.exports = merge(commonConfig, prodConfig);
module.exports = prodConfig;