'use strict'

var red_cards = require('./data/oranges_to_oranges').red_cards;
var green_cards = require('./data/oranges_to_oranges').green_cards;

var oranges_to_oranges = require('./data/oranges_to_oranges');

var getAttribute = function(resp) {
  return green_cards[Math.floor(Math.random()*green_cards.length)];
}

var getContext = function(resp) {
  return red_cards[Math.floor(Math.random()*red_cards.length)];
}

var getInspiration = function(resp) {
  return `${getAttribute()} ${getAttribute()} ${getContext()}`;
}

module.exports = {
  getAttribute,
  getContext,
  getInspiration
};
