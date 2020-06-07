"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MentorSchema extends Schema {
  up() {
    this.create("mentors", (table) => {
      table.increments();
      table.integer("user_id").notNullable().references("id").inTable("users");
      table.integer("status").notNullable().comment("1 = Inativo, 2 = Ativo");
      table.string("created_by", 80);
      table.timestamp("created_at").notNullable().defaultTo(this.fn.now());
      table.timestamp("updated_at");
    });
  }

  down() {
    this.drop("mentors");
  }
}

module.exports = MentorSchema;
