"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Subject extends Model {
  static get table() {
    return "mentoria.subjects";
  }

  static get hidden() {
    return ["created_at", "created_by", "updated_at"];
  }
}

module.exports = Subject;
