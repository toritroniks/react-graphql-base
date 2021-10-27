import ConfigType from './ConfigType';

let configDev: Readonly<ConfigType> = {
  env: 'dev',
  graphqlEndpoint: 'https://my.graphql.dev/',
};

configDev = Object.freeze(configDev);

export default configDev;
