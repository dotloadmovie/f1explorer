const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const CircuitSchema = require("./lists/Circuit.js");
const ConstructorResultSchema = require("./lists/Constructor_Result");
const ConstructorStandingSchema = require("./lists/Constructor_Standing");
const ConstructorSchema = require("./lists/Constructor");
const DriverSchema = require("./lists/Driver");
const DriverStandingSchema = require("./lists/Driver_Standings");
const LapTimeSchema = require("./lists/Lap_Time");
const PitStopSchema = require("./lists/Pit_Stop");
const QualifyingSchema = require("./lists/Qualifying");
const RaceSchema = require("./lists/Race");
const ResultSchema = require("./lists/Result");
const SeasonSchema = require("./lists/Season");
const StatusSchema = require("./lists/Status");

const PROJECT_NAME = "f1";
const adapterConfig = { mongoUri: "mongodb://localhost/f1" };

/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(adapterConfig),
});

keystone.createList("Circuit", CircuitSchema);
keystone.createList("Constructor_Result", ConstructorResultSchema);
keystone.createList("Constructor_Standing", ConstructorStandingSchema);
keystone.createList("Constructor", ConstructorSchema);
keystone.createList("Driver", DriverSchema);
keystone.createList("Driver_Standing", DriverStandingSchema);
keystone.createList("Lap_Time", LapTimeSchema);
keystone.createList("Pit_Stop", PitStopSchema);
keystone.createList("Qualifying", QualifyingSchema);
keystone.createList("Race", RaceSchema);
keystone.createList("Result", ResultSchema);
keystone.createList("Season", SeasonSchema);
keystone.createList("Status", StatusSchema);

const apps = [];

if (process.env.NODE_ENV === "development") {
  apps.push(new GraphQLApp({ apiPath: "/api" }));
  apps.push(
    new AdminUIApp({
      enableDefaultRoute: false,
      apiPath: "/admin/api",
      isAccessAllowed: true,
    })
  );
} else {
  apps.push(new GraphQLApp({ apiPath: "/api", graphiqlPath: false }));
}

module.exports = {
  keystone,
  apps,
};
