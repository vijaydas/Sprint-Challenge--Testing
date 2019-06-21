const db = require('../data/dbConfig.js');
const Games = require('./gamesModel.js');

describe('games model', () => {
    describe('insert()', () => {
        afterEach(async () => {
            await db('games').truncate();
        })

        it('Inserts new game into database', async () => {
            const newGame = {
                title: 'Star Trek Earth',
                genre: 'Mobile',
                releaseYear: '2019'
            }
            const game = await Games.insert(newGame);
            expect(game.title).toBe('Star Trek Earth');
        })



    })
})