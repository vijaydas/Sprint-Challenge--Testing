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

  // ... status 201

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

  // ... status 422

  it("Return status 422 if request is missing data", async () => {
    const newGame = {};

    const response = await request(server)
      .post("/games")
      .send(newGame);
    expect(response.status).toBe(422);
  });

  // ... return JSON

  it("Returns JSON", async () => {
    const response = await request(server).get("/games");
    expect(response.type).toBe("application/json");
  });
});

// test GET responses

describe("test GET /games", () => {
  afterEach(async () => {
    await db("games").truncate();
  });

  // ... status 200

  it("Return status 200 if successful", async () => {
    const response = await request(server).get("/games");
    expect(response.status).toBe(200);
  });

  // ... return JSON

  it("Returns JSON", async () => {
    const response = await request(server).get("/games");
    expect(response.type).toBe("application/json");
  });

  // ... returns Array

  it("Returns an array of games", async () => {
      const response = await request(server).get("/games");

      expect(Array.isArray(response.body)).toBe(true);
  });
});
