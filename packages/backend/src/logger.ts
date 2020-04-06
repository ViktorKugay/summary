import pino from 'pino';

export const logger = pino().child({project: 'v.kugay'});
