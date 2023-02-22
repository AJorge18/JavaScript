const winston = require('winston');

function throwCustomError(message) {
  try {
    throw new Error(message);
  } catch (error) {
    winston.error(error.message);
  }
}