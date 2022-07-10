import { expect } from 'chai';
import mongoose from 'mongoose';
import sinon, { SinonStub } from 'sinon';

import CarModel from '../../../model/cars.model'
import create from '../../mocks/CarsModel';


describe('Model Cars', () => {

  
  describe('Add Car', () => {
    before(() => {
      sinon.stub(mongoose.Model, 'create').resolves(create)
    });
    after(() => {
      sinon.stub(mongoose.Model.create as SinonStub).restore()
    });
    
    it('successs', async () => {
      const carModel = new CarModel()

      const carCreated = await carModel.create(create)
      expect(carCreated).to.be.deep.equal(create)
    });
  })
})