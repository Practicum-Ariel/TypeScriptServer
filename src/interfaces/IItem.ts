import { Document } from "mongoose"

export default interface IItem extends Partial<Document>  {
    barcode: number
    name: string
    price: number
    amount: number
    cost?: number
}

// _id
// save