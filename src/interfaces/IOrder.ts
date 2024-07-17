import { Document } from "mongoose"
import { ObjectId } from "mongodb"
import  { IItemOrder } from "./IItem"
import IUser from "./IUser"


export default interface IOrder extends Partial<Document> {
    date : Date,
    total : Number,
    user : ObjectId | IUser,
    items : ObjectId[] | IItemOrder[]

}

