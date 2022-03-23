import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as Router from '@koa/router';
import { RegisterRoutes } from './dist/routes';
import _ from 'lodash';

declare module 'koa' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultContext {}
}
export const app = new Koa<Record<string, never>, {}>();

// Use body parser to read sent json payloads
app.use(bodyParser());

function stringifyError(error: unknown): string {
  try {
    return JSON.stringify(error);
  } catch {
    return String(error);
  }
}

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.error(error);
    ctx.response.status = 400;
    ctx.response.body = stringifyError(error);
  }
});

const router = new Router();
RegisterRoutes(router);

app.use(router.routes()).use(router.allowedMethods());

export const server = app.listen(8800);
