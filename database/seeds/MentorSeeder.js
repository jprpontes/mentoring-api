"use strict";

/*
|--------------------------------------------------------------------------
| MentorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

const UserModel = use("App/Models/User");
const MentorModel = use("App/Models/Mentor");

class MentorSeeder {
  async run() {}
}

module.exports = MentorSeeder;
