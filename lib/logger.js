'use strict';

const elasticsearch = require('elasticsearch');
const getIndex = require('./getIndex');

const host = process.env.HUBOT_ELASTICSEARCH_LOGGER_HOST || '127.0.0.1';
const port = process.env.HUBOT_ELASTICSEARCH_LOGGER_PORT || 9200;
const rawIndex = process.env.HUBOT_ELASTICSEARCH_LOGGER_INDEX || 'hubot-${YYYY-MM-DD}';

const index = getIndex(rawIndex);
const type = 'message';

const client = new elasticsearch.Client({
  host: `${host}:${port}`
});

module.exports.log = (data, cb) => {
  client.index({
    index,
    type,
    body: data
  }, cb);
};
