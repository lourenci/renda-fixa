const babel = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '12.14',
          browsers: '> 5%',
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
}

module.exports = babel
