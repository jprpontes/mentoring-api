"use strict";

const BaseService = require("./BaseService");
const MentorRepository = require("../Repositories/MentorRepository");
const SubjectRepository = require("../Repositories/SubjectRepository");

class SearchService extends BaseService {
  async search({ value }) {
    //Buscando mentores.
    var mentorRepository = new MentorRepository();
    var mentors = await mentorRepository.search({
      value: value,
    });

    //Buscando assuntos.
    var subjectRepository = new SubjectRepository();
    var subjects = await subjectRepository.search({
      value: value,
    });

    return {
      mentors: mentors,
      subjects: subjects,
    };
  }
}

module.exports = SearchService;
