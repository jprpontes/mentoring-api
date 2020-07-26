"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MentorExperiencesSchema extends Schema {
  up() {
    this.create("mentor_experiences", (table) => {
      table.increments();
      table
        .integer("mentor_id")
        .notNullable()
        .references("id")
        .inTable("mentors");
      table.string("company").notNullable();
      table.string("occupation").notNullable();
      table.date("dtstart").notNullable();
      table.date("dtend");
      table.string("created_by", 80);
      table.timestamp("created_at").notNullable().defaultTo(this.fn.now());
      table.timestamp("updated_at");
    });
  }

  down() {
    this.drop("mentor_experiences");
  }
}

module.exports = MentorExperiencesSchema;
