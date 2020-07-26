"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MentorReviewsSchema extends Schema {
  up() {
    this.create("mentor_reviews", (table) => {
      table.increments();
      table
        .integer("mentor_id")
        .notNullable()
        .references("id")
        .inTable("mentors");
      table.integer("user_id").notNullable().references("id").inTable("users");
      table.text("review").notNullable();
      table.integer("stars").notNullable();
      table.timestamp("dtreview").notNullable();
      table.string("created_by", 80);
      table.timestamp("created_at").notNullable().defaultTo(this.fn.now());
      table.timestamp("updated_at");
    });
  }

  down() {
    this.drop("mentor_reviews");
  }
}

module.exports = MentorReviewsSchema;
