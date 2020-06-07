"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MentorSubjectsSchema extends Schema {
  up() {
    this.create("mentor_subjects", (table) => {
      table.increments();
      table
        .integer("mentor_id")
        .notNullable()
        .references("id")
        .inTable("mentors");
      table.string("subject", 254).notNullable();
      table.string("created_by", 80);
      table.timestamp("created_at").notNullable().defaultTo(this.fn.now());
      table.timestamp("updated_at");
    });
  }

  down() {
    this.drop("mentor_subjects");
  }
}

module.exports = MentorSubjectsSchema;
