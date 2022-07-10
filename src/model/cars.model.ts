import { Schema, model as createModel, Document } from 'mongoose';
import { Car } from '../interfaces/CarInterface';
import GenericModel from './mongo.model';

interface CarDocument extends Car, Document { }

const carSchema = new Schema<CarDocument>({
  model: {
    type: String,
    required: true,
    minlength: 3,
  },
  year: {
    type: Number,
    required: true,
    min: 1900,
    max: 2022,
  },
  color: {
    type: String,
    required: true,
    minlength: 3,
  },
  status: {
    type: Boolean,
    required: false,
  },
  buyValue: {
    type: Number,
    required: true,
  },
  doorsQty: {
    type: Number,
    required: true,
  },
  seatsQty: {
    type: Number,
    required: true,
  },
}, { versionKey: false });

class CarModel extends GenericModel<Car> {
  constructor(model = createModel('Cars', carSchema)) {
    super(model);
  }
}

export default CarModel;