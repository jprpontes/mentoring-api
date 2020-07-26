"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MentorExperience extends Model {
  static get table() {
    return "mentor_experiences";
  }

  static get hidden() {
    return ["created_at", "created_by", "updated_at"];
  }

  mentor() {
    return this.belongsTo("App/Models/Mentor", "mentor_id", "id");
  }
}

module.exports = MentorExperience;
