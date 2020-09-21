import 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';

const expect = chai.expect;
const assert = chai.assert;

chai.use(chaiHttp);

describe('Mocha Test', () => {
  it('Shows Mocha is running...', () => {
    expect(true).to.equal(true);
    assert.equal(true, true);
  });
});
