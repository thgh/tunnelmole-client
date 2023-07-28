import deepmerge from 'deepmerge'

const baseConfig = {
  hostip: {
    httpEndpoint: 'https://service.tunnelmole.com',
    endpoint: 'https://service.tunnelmole.com',
    port: '80',
  },
  runtime: {
    enableLogging: true,
  },
}

const config = deepmerge(baseConfig, {})

export default config
