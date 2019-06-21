require("dotenv").config();
const db = require("../data/dbConfig.js");
const request = require("supertest");
const server = require("./server.js");

const Games = require("../games/gamesModel.js");

// test POST responses

describe("test POST /games", () => {
  afterEach(async () => {
    await db("games").truncate();
  });

// status 201
  
it("Return status 201 if successful", async () => {
    const newGame = {
      title: "Spock Lives",
      genre: "PS5",
      releaseYear: "1999"
    };

    const response = await request(server)
      .post("/games")
      .send(newGame);
    expect(response.status).toBe(201);
  });

// status 422

  it("Return status 422 if request is missing data", async () => {
    const newGame = {
      title: null,
      genre: null,
      releaseYear: "1999"
    };

    const response = await request(server)
      .post("/games")
      .type("JSON")
      .send(newGame)
      .set("Accept", "application/json");

    expect(response.status).toBe(422);
  });


});

// test GET
