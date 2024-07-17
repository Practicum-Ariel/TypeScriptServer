import { FilterQuery, Model, UpdateQuery } from "mongoose";
import IUser from "../interfaces/IUser";
import UserModel from '../models/UserModel'
import IController from "../interfaces/IController";

class UserController implements IController<IUser> {

    create(data: IUser): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    read(filter: FilterQuery<IUser>): Promise<IUser[]> {
        throw new Error("Method not implemented.");
    }
    readOne(filter: FilterQuery<IUser>): Promise<IUser | null> {
        throw new Error("Method not implemented.");
    }
    update(id: string, dataUpdated: UpdateQuery<IUser>): Promise<void> {
        throw new Error("Method not implemented.");
    }
    del?(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
  
}

export default UserController
