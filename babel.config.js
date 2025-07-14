module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // Temporarily disabling plugins to isolate the startup error.
    plugins: [],
  };
};
