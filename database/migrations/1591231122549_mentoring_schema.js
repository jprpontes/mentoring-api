"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MentoringSchema extends Schema {
  up() {
    this.create("mentorings", (table) => {
      table.increments();
      table
        .integer("mentor_id")
        .notNullable()
        .references("id")
        .inTable("mentors");
      table.string("title", 254).notNullable();
      table.string("description").notNullable();
      table.integer("status").notNullable().comment("1 = Inativo, 2 = Ativo");
      table.string("created_by", 80);
      table.timestamp("created_at").notNullable().defaultTo(this.fn.now());
      table.timestamp("updated_at");
    });
  }

  down() {
    this.drop("mentorings");
  }
}

module.exports = MentoringSchema;
