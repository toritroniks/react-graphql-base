export default interface ConfigType {
  env: 'local' | 'dev' | 'prd';
  graphqlEndpoint: string;
}
