import constants, { ConstantsType } from './constants';
import ConfigType from './ConfigType';
import configLocal from './config-local';
import configDev from './config-dev';
import configPrd from './config-prd';

let config: ConfigType & ConstantsType;

const env = process.env.REACT_APP_STAGE;

switch (env) {
  case 'prd':
    config = { ...configPrd, ...constants };
    break;
  case 'dev':
    config = { ...configDev, ...constants };
    break;
  default:
    config = { ...configLocal, ...constants };
}

export default config;
