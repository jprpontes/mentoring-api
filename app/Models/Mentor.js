"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Mentor extends Model {
  static get table() {
    return "mentors";
  }

  static get hidden() {
    return ["created_at", "created_by", "updated_at"];
  }

  mentoring() {
    return this.hasMany("App/Models/Mentoring", "id", "mentor_id");
  }

  subjects() {
    return this.hasMany("App/Models/MentorSubject", "id", "mentor_id");
  }

  user() {
    return this.belongsTo("App/Models/User", "user_id", "id");
  }
}

module.exports = Mentor;
