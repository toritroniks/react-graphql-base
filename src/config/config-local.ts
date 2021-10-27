import ConfigType from './ConfigType';

let configLocal: Readonly<ConfigType> = {
  env: 'local',
  graphqlEndpoint: 'http://localhost:3030',
};

configLocal = Object.freeze(configLocal);

export default configLocal;
