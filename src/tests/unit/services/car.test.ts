import { expect } from 'chai';
import Sinon from 'sinon';
import CarModel from '../../../model/cars.model';
import CarService from '../../../service/cars.service';
import create from '../../mocks/CarsModel';

describe('Service Car', () => {
  describe('Create', () => {

    const carModelMock = new CarModel();
    let carService: CarService;

    before(() => {
      Sinon.stub(carModelMock, 'create').resolves(create);
      carService = new CarService();
    });

    after(() => {
      Sinon.restore();
    });

    it('Success', async () => {
      const carService = new CarService(carModelMock);
      const result = await carService.create(create);
      expect(result).to.deep.equal(create);
    })

  })

});