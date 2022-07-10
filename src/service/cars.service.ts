import { Car } from '../interfaces/CarInterface';
import Service from './generic.service';
import CarModel from '../model/cars.model';

class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }
}

export default CarService;