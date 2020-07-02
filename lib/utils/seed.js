require('dotenv').config();

const chance = require('chance').Chance();

const Tweet = require('../models/Tweet');

module.exports = async({ quotes = 50 } = {}) => {
  await Tweet.create([...Array(quotes)].map(() => ({
    quote: chance.paragraph({ sentences: 2 }),
    author: chance.pickone(['unknown', chance.name()])
  })));
};
