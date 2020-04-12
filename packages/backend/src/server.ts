import {INestApplication} from '@nestjs/common';
import {Logger} from 'nestjs-pino';
import {isTest} from './config';
import helmet from 'helmet';

export function getNestAppOptions() {
  return {
    logger: false,
    cors: {origin: true},
  };
}

export async function addMiddlewares(app: INestApplication) {
  if (!isTest) {
    app.useLogger(app.get(Logger));
  }

  app.use(helmet());

  return app;
}
