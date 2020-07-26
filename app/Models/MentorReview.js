"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MentorReview extends Model {
  static get table() {
    return "mentor_reviews";
  }

  static get hidden() {
    return ["created_at", "created_by", "updated_at"];
  }

  mentor() {
    return this.belongsTo("App/Models/Mentor", "mentor_id", "id");
  }

  user() {
    return this.belongsTo("App/Models/User", "user_id", "id");
  }
}

module.exports = MentorReview;
