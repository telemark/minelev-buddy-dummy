'use strict'

const { send } = require('micro')
const { parse } = require('url')
const actionHandler = require('./lib/action-handler')

module.exports = async (request, response) => {
  const { pathname } = await parse(request.url, true)
  if (pathname === '/favicon.ico') {
    send(response, 404)
  } else if (pathname === '/ping') {
    send(response, 200, { ping: 'pong' })
  } else {
    send(response, 200, actionHandler(request))
  }
}
