'use strict';

const moment = require('moment');
const assert = require('assert');
const getIndex = require('../lib/getIndex');

describe('getIndex', () => {
  describe('when the index does not contain ${}', () => {
    it('returns the index', () => {
      assert.equal(getIndex('hubot'), 'hubot');
    });
  });

  describe('when the index contains ${}', () => {
    it('formats the template using the date', () => {
      assert.equal(
        getIndex('hubot-${YYYY-MM-DD}'),
        `hubot-${moment().format('YYYY-MM-DD')}`
      );
    });
  });
});
