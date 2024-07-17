import {  ObjectId } from "mongodb"
import { Document } from "mongoose"

export default interface IItem extends Partial<Document>  {
    barcode: number
    name: string
    price: number
    amount: number
    cost?: number
}
export interface IItemOrder  extends Partial<Document>  {
    item: IItem | ObjectId
    price: number
    qty: number
}
