const domain = process.env.PRODUCTION_DOMAIN;

module.exports = {
  name: 'to-do-consumer',
  development: {
    port: 8080,
    url: 'http://localhost',
    remotes: {
      'remote/identification': 'identification@http://localhost:8081/remoteEntry.js',
    },
  },
  production: {
    remotes: {
      'remote/identification': `identification@${domain}/template/remoteEntry.js`,
    },
  },
};
