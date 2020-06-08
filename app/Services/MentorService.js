"use strict";

const BaseService = require("./BaseService");
const MentorRepository = require("../Repositories/MentorRepository");

class MentorService extends BaseService {
  async show({ id }) {
    var mentorRepository = new MentorRepository();
    var mentor = await mentorRepository.show({
      id: id,
    });

    return {
      mentor: mentor,
    };
  }
}

module.exports = MentorService;
