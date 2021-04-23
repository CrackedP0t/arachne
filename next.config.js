let e = {
  future: {
    webpack5: true,
  }
};

if (process.env.GITHUB_RUN_ID) {
  e.assetPrefix = "/arachne/";
  e.basePath = "/arachne";
}

module.exports = e;