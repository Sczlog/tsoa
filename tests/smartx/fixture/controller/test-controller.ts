import { Body, File, FormField, Post, Request, Response, Route, Tags, UploadedFile } from '@smartx/tsoa-runtime';
import koa = require('koa');

export declare type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Json: any;
  UUID: any;
  Long: any;
  Upload: any;
};

type ScalarNumberType = {
  long: Scalars['Long'];
  int: Scalars['Int'];
  float: Scalars['Float'];
};

type Ref = {
  A: string;
  B?: string;
};

declare type NullableRefAlias = Ref | undefined;

type NullableRefType = {
  ref: Ref;
  nullableRef?: Ref;
  nullableRefAlias: NullableRefAlias;
  nullableNullableRefAlias?: NullableRefAlias;
};

@Route()
@Response<string>(400)
@Tags('Test')
export class TestController {
  @Post('/scalarNumber')
  public async scalarNumber(@Body() requestBody: ScalarNumberType, @Request() request: koa.Request): Promise<string> {
    return new Promise<string>(resolve => {
      console.log(requestBody);
      resolve('');
    });
  }

  @Post('/nullableRef')
  public async nullableRef(@Body() requestBody: NullableRefType, @Request() request: koa.Request): Promise<string> {
    return new Promise<string>(resolve => {
      console.log(requestBody);
      resolve('');
    });
  }

  @Post('/formField')
  public async formField(@FormField('string') stringField: string, @FormField('number') numberField: number, @FormField('ref') refField: Ref, @UploadedFile('file') fileField?: File): Promise<string> {
    return new Promise<string>(resolve => {
      console.log(stringField, numberField, refField);
      resolve('');
    });
  }
}
