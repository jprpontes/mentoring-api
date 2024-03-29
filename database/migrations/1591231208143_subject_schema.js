"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SubjectSchema extends Schema {
  up() {
    this.create("subjects", (table) => {
      table.increments();
      table.string("description", 254).notNullable();
      table.integer("status").notNullable().comment("1 = Inativo, 2 = Ativo");
      table.string("created_by", 80);
      table.timestamp("created_at").notNullable().defaultTo(this.fn.now());
      table.timestamp("updated_at");
    });
  }

  down() {
    this.drop("subjects");
  }
}

module.exports = SubjectSchema;
