"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Mentoring extends Model {
  static get table() {
    return "mentoria.mentoring";
  }

  static get hidden() {
    return ["created_at", "created_by", "updated_at"];
  }
}

module.exports = Mentoring;
