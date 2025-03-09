import pino from 'pino';

const logger = pino({
  browser: {
    serialize: true,
    asObject: true,
  },
});

export default logger;
