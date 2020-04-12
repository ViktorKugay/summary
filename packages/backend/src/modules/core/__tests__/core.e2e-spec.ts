import {setup, teardown, TestCtx} from '../../../__tests__/utils';

let ctx: TestCtx;

beforeEach(async () => {
  ctx = await setup();
});

afterAll(() => {
  teardown(ctx);
});

describe('CoreModule (e2e)', () => {
  test('get success healthcheck', async () => {
    const validHealthcheckResponse = await ctx.agent.get('/status');
    expect(validHealthcheckResponse.status).toBe(200);
    expect(validHealthcheckResponse.body.status).toBe('success');
  });
});
