import { generateSpec, generateSpecAndRoutes } from '@smartx/tsoa-cli';
import * as fs from 'fs';

const generate = async () => {
  const meta = await generateSpecAndRoutes({
    configuration: {
      spec: {
        outputDirectory: './fixture/dist',
        specFileBaseName: 'swagger2.0',
      },
      routes: {
        routesDir: './fixture/dist',
        middleware: 'koa',
      },
      ignore: ['**/node_modules/**'],
      entryFile: './fixture/server.ts',
      controllerPathGlobs: ['fixture/controller/**/*-controller.ts'],
      noImplicitAdditionalProperties: 'throw-on-extras',
    },
  });
  generateSpec(
    {
      outputDirectory: './fixture/dist',
      specFileBaseName: 'swagger3.0',
      entryFile: './fixture/server.ts',
      controllerPathGlobs: ['fixture/controller/**/*-controller.ts'],
      noImplicitAdditionalProperties: 'throw-on-extras',
      specVersion: 3,
    },
    undefined,
    undefined,
    meta,
  );
};

generate();
