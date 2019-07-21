const { name, version } = require('../package.json')
module.exports = (request, response) => {
  response.json({ ping: 'pong', name: name, version: version })
}
