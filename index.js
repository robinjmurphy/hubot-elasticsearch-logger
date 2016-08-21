// Description:
//   Logs chats to Elasticsearch
// Configuration:
//   HUBOT_ELASTICSEARCH_LOGGER_HOST - The Elasticsearch host
//   HUBOT_ELASTICSEARCH_LOGGER_PORT - The Elasticsearch port
//   HUBOT_ELASTICSEARCH_LOGGER_INDEX - The Elasticsearch index to use for storing chats
'use strict';

const logger = require('./lib/logger');

module.exports = (robot) => {
  robot.hear(/.+/, (res) => {
    const message = res.message;

    // don't log private messages
    if (!message.room) return;

    const data = {
      user: message.user.name,
      text: message.text,
      room: message.room,
      timestamp: new Date()
    };

    logger.log(data, (err) => {
      if (err) return robot.logger.error(err.message);
    });
  });
};
