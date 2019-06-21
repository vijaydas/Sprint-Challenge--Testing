const express = require('express');
const server = express();
const Games = require("../games/gamesModel.js")

server.use(express.json());

// ROUTES

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
  });

server.get('/games', (req, res) => {
    Games.getAll().then(games => {
        res.status(200).json(games)
    });
});

server.post('/games', (req, res) => {
    let { title, genre, releaseYear } = req.body;
    if (!title || !genre) {
        return res.status(422).json({ message: "please provide title and genre"});
    } else {
        Games.insert(req.body)
        .then(newGame => {
            res.status(201).json(newGame);
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }

})


module.exports = server;
