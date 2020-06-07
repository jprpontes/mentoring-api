"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MentoringSubjectSchema extends Schema {
  up() {
    this.create("mentoring_subjects", (table) => {
      table.increments();
      table
        .integer("mentoring_id")
        .notNullable()
        .references("id")
        .inTable("mentorings");
      table.string("subject", 254).notNullable();
      table.string("created_by", 80);
      table.timestamps();
      table.timestamp("created_at").notNullable().defaultTo(this.fn.now());
    });
  }

  down() {
    this.drop("mentoring_subjects");
  }
}

module.exports = MentoringSubjectSchema;
