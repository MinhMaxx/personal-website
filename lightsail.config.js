module.exports = {
  apps: [
    {
      name: "personal-website",
      script: "server/src/server.js",
      env_production: {
        NODE_ENV: "production",
        PORT: 8080,
      },
    },
  ],
};
