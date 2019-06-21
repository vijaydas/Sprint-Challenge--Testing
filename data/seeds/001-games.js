
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: 'Star Trek Earth', genre: 'Mobile', releaseYear: "2019"},
        {title: 'Kirk Retires', genre: 'Gameboy', releaseYear: "1999"},
        {title: 'Spock Lives', genre: 'PS5', releaseYear: "2145"},
      ]);
    });
};
