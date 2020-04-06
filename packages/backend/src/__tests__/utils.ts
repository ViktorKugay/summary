import {INestApplication} from '@nestjs/common';
import {Test, TestingModule} from '@nestjs/testing';
import request from 'supertest';
import {AppModule} from '../app.module';
import {addMiddlewares} from '../server';

export type TestCtx = {
  app: INestApplication;
  agent: request.SuperTest<request.Test>;
};

export async function setup(): Promise<TestCtx> {
  const appModule: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  const app = appModule.createNestApplication<INestApplication>();
  addMiddlewares(app);
  await app.init();
  const agent = request(app.getHttpServer());

  return {app, agent};
}

export async function teardown(ctx: TestCtx) {
  if (ctx) {
    await ctx.app.close();
  }
}
