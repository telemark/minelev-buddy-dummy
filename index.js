const { readFileSync } = require('fs')
const md = require('markdown-it')()
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
    const readme = readFileSync(`${__dirname}/README.md`, 'utf-8')
    send(response, 200, md.render(readme))
  } else {
    send(response, 200, actionHandler(request))
  }
}
