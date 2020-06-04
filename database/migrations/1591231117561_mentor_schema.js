'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MentorSchema extends Schema {
  up () {
    this.create('mentors', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('mentors')
  }
}

module.exports = MentorSchema
