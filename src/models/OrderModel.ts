import mongoose from "mongoose";
import IOrder from "../interfaces/IOrder";
import { IItemOrder } from "../interfaces/IItem";



const itemOrderSchema = new mongoose.Schema<IItemOrder>({
    item: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'item'
    },
    price: { type: Number },
    qty: { type: Number }
})

const orderSchema = new mongoose.Schema<IOrder>({

    date: {
        type: Date,
        default: Date.now
    },
    total: {
        type: Number
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    items: [itemOrderSchema]
})
export default mongoose.model<IOrder>('order', orderSchema)
