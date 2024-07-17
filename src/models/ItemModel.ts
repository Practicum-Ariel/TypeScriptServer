import mongoose from "mongoose";
import IItem from "../interfaces/IItem";

const itemSchema = new mongoose.Schema<IItem>({

    barcode: {
        type: Number,
        require: true,
        unique: true
    },
    amount: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        default: 0
    },
    cost: {
        type: Number,
    }

})
export default mongoose.model<IItem>('item', itemSchema)