var logger = require('./logger');

logger.logMessage(new Date().toISOString(), 'Hello Message');

logger.changeStrategy('toFile');

logger.logMessage(new Date().toISOString(), '5 Crores Income');