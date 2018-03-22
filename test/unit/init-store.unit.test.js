import { describe, it } from 'mocha';

import { expect } from '../utils/shared';
import initStore from '../utils/init-store';

describe('initStore', () => {
  it('Initializes a new store without an error', () => {
    expect(() => initStore()).not.to.throw();
  })
});