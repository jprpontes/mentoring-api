"use strict";

const BaseRepository = require("./BaseRepository");
const Database = use("Database");

class MentorRepository extends BaseRepository {
  async search({ value }) {
    var query = await Database.select(["m.id", "u.username"])
      .from("mentors as m")
      .innerJoin("users as u", "u.id", "m.user_id")
      .where("u.username", "like", `%${value}%`);

    return query;
  }
}

module.exports = MentorRepository;
