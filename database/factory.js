"use strict";

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Factory = use("Factory");
const Hash = use("Hash");

Factory.blueprint("App/Models/User", async (faker) => {
  return {
    username: faker.username(),
    email: faker.email(),
    password: await Hash.make("M@tor12*"),
    status: 2,
    created_by: "factory",
  };
});

Factory.blueprint("App/Models/Mentor", async (faker) => {
  return {
    status: 2,
    created_by: "Factory",
  };
});

Factory.blueprint("App/Models/MentorExperience", async (faker) => {
  return {
    company: faker.text(),
    occupation: faker.text(),
    dtstart: faker.date(),
    created_by: "Factory",
  };
});
