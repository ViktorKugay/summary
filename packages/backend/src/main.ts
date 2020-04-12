import {join} from 'path';
import {AppModule} from './app.module';
import {NestFactory} from '@nestjs/core';
import {getNestAppOptions, addMiddlewares} from './server';
import {NestExpressApplication} from '@nestjs/platform-express';

const PORT = 3000;

startApp({port: PORT});

export async function startApp({port}: {port: number}) {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, getNestAppOptions());

  addMiddlewares(app);

  app.setBaseViewsDir(join(__dirname, '..', 'public'));
  app.setViewEngine('hbs');

  await app.listenAsync(port);

  return {app};
}
