"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MentoringSubject extends Model {
  static get table() {
    return "mentoring_subjects";
  }

  static get hidden() {
    return ["created_at", "created_by", "updated_at"];
  }

  mentoring() {
    return this.belongsTo("App/Models/Mentoring", "mentoring_id", "id");
  }
}

module.exports = MentoringSubject;
