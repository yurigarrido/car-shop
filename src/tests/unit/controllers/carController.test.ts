import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import { Request, Response, NextFunction } from 'express';
import CarService from '../../../service/cars.service';
import CarModel from '../../../model/cars.model';
import Sinon = require('sinon');
import CarController from '../../../controllers/cars.controller';

import create from '../../mocks/CarsModel';
chai.use(chaiHttp);
const { expect } = chai;

describe('Controller Car', () => {
    describe('create', () => {
      const carServiceMock = new CarService(new CarModel());
      const req = {} as Request;
      const res = {} as Response;
      let next = () => ({}) as NextFunction;

      before(() => {
        Sinon.stub(carServiceMock, 'create').resolves(create);
        res.status = Sinon.stub().returns(res);
        res.json = Sinon.stub().returns(res);
        req.body = create;
      });

      after(() => {
        Sinon.restore();
      });

      it('verfica o status e se foi chamado com json correto', async () => {
        const carController = new CarController(carServiceMock);
        await carController.create(req, res, next);

        expect((res.status as Sinon.SinonStub).calledWith(201)).to.be.true;
        expect((res.json as Sinon.SinonStub).calledWith(create)).to.be.true;
      });

    });
});