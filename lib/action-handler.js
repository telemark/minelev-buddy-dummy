'use strict'

const match = require('micro-match')
const students = require('../data/students.json')
const search = require('../data/search.json')
const contactTeachers = require('../data/contactTeachers.json')
const logger = require('./logger')

module.exports = request => {
  switch (true) {
    case /students/.test(request.url):
      logger('info', ['request-url', request.url])
      let { user, id } = match('/users/:user/students/:id', request.url) || false
      if (!['gauss', 'riemann'].includes(user)) {
        user = 'riemann'
      }
      return id ? require(`../data/${user}/${id}.json`) : students

    case /search/.test(request.url):
      logger('info', ['request-url', request.url])
      return search

    case /contactTeachers/.test(request.url):
      logger('info', ['request-url', request.url])
      return contactTeachers

    case /contactClasses/.test(request.url):
      logger('info', ['request-url', request.url])
      let { userid } = match('/users/:userid/contactClasses', request.url) || false
      if (!['gauss', 'riemann'].includes(userid)) {
        userid = 'riemann'
      }
      return require(`../data/${userid}/contactClasses.json`)

    default:
      logger('info', ['request-url', request.url])
      return { error: 'Invalid method' }
  }
}
