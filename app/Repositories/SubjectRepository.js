"use strict";

const BaseRepository = require("./BaseRepository");
const Database = use("Database");

class SubjectRepository extends BaseRepository {
  async search({ value }) {
    var query = await Database.select(["s.id", "s.description"])
      .from("subjects as s")
      .where("s.description", "like", `%${value}%`);

    return query;
  }
}

module.exports = SubjectRepository;
