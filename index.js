'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { send } = require('micro')
const { parse } = require('url')
const actionHandler = require('./lib/action-handler')
const pkg = require('./package.json')

module.exports = async (request, response) => {
  const { pathname } = await parse(request.url, true)
  if (pathname === '/favicon.ico') {
    send(response, 404)
  } else if (pathname === '/ping') {
    send(response, 200, { ping: 'pong', 'name': pkg.name, version: pkg.version })
  } else if (pathname === '/') {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  } else {
    send(response, 200, actionHandler(request))
  }
}
