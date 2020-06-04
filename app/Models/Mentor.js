"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Mentor extends Model {
  static get table() {
    return "mentoria.mentors";
  }

  static get hidden() {
    return ["created_at", "created_by", "updated_at"];
  }
}

module.exports = Mentor;
