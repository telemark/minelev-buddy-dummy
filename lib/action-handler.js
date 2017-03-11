'use strict'

const match = require('micro-match')
const student = require('../data/student.json')
const students = require('../data/students.json')
const search = require('../data/search.json')
const contactTeachers = require('../data/contactTeachers.json')
const contactClasses = require('../data/contactClasses.json')

module.exports = request => {
  switch (true) {
    case /students/.test(request.url):
      const { id } = match('/users/:user/students/:id', request.url) || false
      const result = id ? student : students
      return result

    case /search/.test(request.url):
      return search

    case /contactTeachers/.test(request.url):
      return contactTeachers

    case /contactClasses/.test(request.url):
      return contactClasses

    default:
      return { error: 'Invalid method' }
  }
}
