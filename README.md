# hubot-elasticsearch-logger

[![Build Status](https://travis-ci.org/robinjmurphy/hubot-elasticsearch-logger.svg?branch=master)](https://travis-ci.org/robinjmurphy/hubot-elasticsearch-logger)

> [Hubot](https://hubot.github.com/) script for logging chats to [Elasticsearch](https://www.elastic.co/products/elasticsearch)

## Installation

```
npm install --save hubot-elasticsearch-logger
```

Add the script to your `external-scripts.json` file:

```json
[
  "hubot-elasticsearch-logger"
]
```

## Configuration

The script is configured using the following environment variables:

|Variable|Description|Default|
|--------|-----------|-------|
|`HUBOT_ELASTICSEARCH_LOGGER_HOST`|The Elasticsearch host|`127.0.0.1`|
|`HUBOT_ELASTICSEARCH_LOGGER_PORT`|The Elasticsearch port|`9200`|
|`HUBOT_ELASTICSEARCH_LOGGER_INDEX`|The index to use for storing chats. Any [Moment.js format patterns](http://momentjs.com/docs/#/displaying/format/) wrapped in `${}` will be replaced with the current date to support time-based indices|`hubot-${YYYY-MM-DD}`|
