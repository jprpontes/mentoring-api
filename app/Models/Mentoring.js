"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Mentoring extends Model {
  static get table() {
    return "mentoring";
  }

  static get hidden() {
    return ["created_at", "created_by", "updated_at"];
  }

  subjects() {
    return this.hasMany("App/Models/MentoringSubject", "id", "mentoring_id");
  }

  mentor() {
    return this.belongsTo("App/Models/Mentor", "mentor_id", "id");
  }
}

module.exports = Mentoring;
