import {setup, teardown, TestCtx} from '../../../__tests__/utils';

let ctx: TestCtx;

beforeEach(async () => {
  ctx = await setup();
});

afterAll(() => {
  teardown(ctx);
});

describe('CoreModule (e2e)', () => {
  test('GET /status', async () => {});
});
