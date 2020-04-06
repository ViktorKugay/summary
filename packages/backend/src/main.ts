import {logger} from './logger';
import {AppModule} from './app.module';
import {NestFactory} from '@nestjs/core';
import {getNestAppOptions, addMiddlewares} from './server';

const PORT = 3000;

startApp({port: PORT});

export async function startApp({port}: {port: number}) {
  const app = await NestFactory.create(AppModule, getNestAppOptions());

  addMiddlewares(app);

  await app.listenAsync(port);

  logger.info({msg: 'app.listen.api', port});

  return {app};
}
