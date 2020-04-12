import {Test, TestingModule} from '@nestjs/testing';
import {INestApplication} from '@nestjs/common';
import request from 'supertest/lib/agent';
import {addMiddlewares} from '../server';
import {AppModule} from '../app.module';

export type TestCtx = {
  app: INestApplication;
  agent: any;
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
