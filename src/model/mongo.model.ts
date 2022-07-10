import {
  Model as ModelMongo,
  Document,
  Types,
  isValidObjectId,
} from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

abstract class GenericModel<T> implements Model<T> {
  constructor(protected model: ModelMongo<T & Document>) {}

  async create(obj: T): Promise<T> {
    return this.model.create(obj);
  }

  async read(): Promise<T[]> {
    return this.model.find();
  }

  async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) return null;
    return this.model.findOne({ _id });
  }

  async update(_id: string, object: T): Promise<T | null> {
    if (!isValidObjectId(_id)) return null;
    return this.model
      .findOneAndUpdate({ _id: new Types.ObjectId(_id) }, object);
  }

  async delete(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) return null;
    return this.model.findOneAndDelete({ _id: new Types.ObjectId(_id) });
  }
}

export default GenericModel;
