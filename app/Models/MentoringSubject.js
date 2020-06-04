"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MentoringSubject extends Model {
  static get table() {
    return "mentoria.mentoring_subjects";
  }

  static get hidden() {
    return ["created_at", "created_by", "updated_at"];
  }
}

module.exports = MentoringSubject;
