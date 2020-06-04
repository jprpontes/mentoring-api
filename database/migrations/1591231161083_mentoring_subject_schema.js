'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MentoringSubjectSchema extends Schema {
  up () {
    this.create('mentoring_subjects', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('mentoring_subjects')
  }
}

module.exports = MentoringSubjectSchema
