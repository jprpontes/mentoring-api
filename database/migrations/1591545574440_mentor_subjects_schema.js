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
      table.timestamps();
      table.timestamps("created_at").defaultTo(this.fn.now());
    });
  }

  down() {
    this.drop("mentor_subjects");
  }
}

module.exports = MentorSubjectsSchema;
