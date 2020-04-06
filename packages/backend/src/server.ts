import {INestApplication} from '@nestjs/common';
import {Logger} from 'nestjs-pino';
import helmet from 'helmet';

export function getNestAppOptions() {
  return {
    logger: false,
    cors: {origin: true},
  };
}

export async function addMiddlewares(app: INestApplication) {
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //   }),
  // );

  app.useLogger(app.get(Logger));

  app.use(helmet());

  return app;
}
