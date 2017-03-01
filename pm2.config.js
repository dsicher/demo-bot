module.exports = {
  apps: [{
    name: "Prototon",
    script: "index.js",
    exec_mode: "cluster",
    env: {
      "NODE_ENV": "development",
    }
  }]
}
