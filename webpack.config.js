module.exports = (env) => {
  return env.development ? require('./webpack.development.js') : require('./webpack.production.js')
}
