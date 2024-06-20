module.exports = {
    presets: [
      ['minify', {
        builtIns: false, // Disable polyfills
        evaluate: false, // Disable constant folding
        mangle: false // Disable name mangling
      }]
    ]
  };
  