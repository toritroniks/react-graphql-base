import ConfigType from './ConfigType';

let configPrd: Readonly<ConfigType> = {
  env: 'prd',
  graphqlEndpoint: 'https://my.graphql.prd/',
};

configPrd = Object.freeze(configPrd);

export default configPrd;
