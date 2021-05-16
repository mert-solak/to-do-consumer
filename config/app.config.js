const domain = process.env.PRODUCTION_DOMAIN;

module.exports = {
  name: 'to-do-consumer',
  development: {
    port: 8080,
    url: 'http://localhost',
    remotes: {
      task: 'task@http://localhost:8081/remoteEntry.js',
    },
  },
  production: {
    remotes: {
      task: `task@${domain}/consumer/latest/remoteEntry.js`,
    },
  },
};
