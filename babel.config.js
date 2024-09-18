module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@services': './src/services',
          '@repositories': './src/repositories',
          '@controllers': './src/controllers',
          '@middlewares': './src/middlewares',
          '@models': './src/models',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
