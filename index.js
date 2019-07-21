const actionHandler = require('./lib/action-handler')

module.exports = async (request, response) => {
  response.json(actionHandler(request))
}
