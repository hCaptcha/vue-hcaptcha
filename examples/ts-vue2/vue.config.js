/**
 * Necessary to resolve simlinks when locally testing
 *
 * See: https://github.com/vuejs/vue-cli/issues/3336
 * See: https://webpack.js.org/configuration/resolve/#resolve-symlinks
 */
module.exports = {
    chainWebpack: config => config.resolve.set('symlinks', false)
};
