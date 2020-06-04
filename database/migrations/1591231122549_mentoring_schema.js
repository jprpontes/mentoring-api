'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MentoringSchema extends Schema {
  up () {
    this.create('mentorings', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('mentorings')
  }
}

module.exports = MentoringSchema
