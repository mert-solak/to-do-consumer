const domain = process.env.PRODUCTION_DOMAIN;

module.exports = {
  name: 'to-do-consumer',
  development: {
    port: 8080,
    url: 'http://localhost',
    remotes: {
      // 'remote/auth': 'auth@http://localhost:8081/remoteEntry.js',
    },
  },
  production: {
    remotes: {
      'remote/auth': `auth@${domain}/template/remoteEntry.js`,
    },
  },
};
