import path from 'path';
import webpack, { DefinePlugin } from 'webpack';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { BuildPaths } from '../build/types/config';

export default ({ config } : {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  if (config.module?.rules) {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule) => {
      // eslint-disable-next-line no-param-reassign
      rule = rule as webpack.RuleSetRule;
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });
  }

  config.module?.rules?.push(buildCssLoaders(true));
  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://testapi.ru'),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  return config;
};
