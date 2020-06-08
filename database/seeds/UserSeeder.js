"use strict";

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class UserSeeder {
  async run() {
    /**
     * Usuários normais.
     */
    await Factory.model("App/Models/User").createMany(50);

    /**
     * Usuários mentores.
     */
    var user,
      mentor = null;

    for (let i = 0; i < 50; i++) {
      user = await Factory.model("App/Models/User").create();
      mentor = await Factory.model("App/Models/Mentor").make();
      user.mentors().save(mentor);
    }
  }
}

module.exports = UserSeeder;
