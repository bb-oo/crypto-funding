import 'dotenv/config';
import { stub, spy } from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

chai.use(sinonChai);
enzyme.configure({ adapter: new Adapter() });

export { expect, stub, spy };