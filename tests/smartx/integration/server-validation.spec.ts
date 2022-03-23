import { server } from '../fixture/server';
import * as request from 'supertest';
import { expect } from 'chai';
import snapshot = require('snap-shot-it');

describe('smartx variant tsoa runtime', () => {
  it('should validate form field', done => {
    request(server)
      .post('/formField')
      .field('string', `"string"`)
      .field('number', '123')
      .field('ref', `{"A":"A"}`)
      .send()
      .expect(200, (err, res) => {
        expect(err).to.be.null;
        done();
      });
  });
  it('should throw error when get invalid form ref field', done => {
    request(server)
      .post('/formField')
      .field('string', `"string"`)
      .field('number', '123')
      .field('ref', `{"C":"C"}`)
      .send()
      .expect(400, (err, res) => {
        snapshot(res.error);
        done();
      });
  });
});
