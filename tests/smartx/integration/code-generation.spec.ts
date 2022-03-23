import { getFromSpec2, getFromSpec3 } from 'smartx/util';
import * as snapshot from 'snap-shot-it';
describe('smartx variant tsoa cli', () => {
  it('should infer number type from scalar type', () => {
    snapshot(getFromSpec2('definitions', 'ScalarNumberType'));
    snapshot(getFromSpec3('schemas', 'ScalarNumberType'));
  });
  it('should generate nullable ref', () => {
    snapshot(getFromSpec2('definitions', 'NullableRefType'));
    snapshot(getFromSpec3('schemas', 'NullableRefType'));
  });
  it('should generate string type for @formField', () => {
    snapshot(getFromSpec2('paths', 'formField'));
    snapshot(getFromSpec3('paths', 'formField'));
  });
});
