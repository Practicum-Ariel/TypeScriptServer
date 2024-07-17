import { Document, UpdateQuery, UpdateWithAggregationPipeline } from 'mongoose'
import IItem from '../interfaces/IItem'
import ItemModel from '../models/ItemModel'
export default class ItemController {
    // static read(){
    //     return db.items;
    // }

    static async readOne(barcode: number): Promise<IItem | null> {
        return await ItemModel.findOne({ barcode: barcode })
    }
    static async create(item: IItem): Promise<IItem> {
        let result = await ItemModel.create(item)
        return result
    }
    static async update(barcode: number, data: UpdateQuery<IItem>) { //: Promise<Document>{
        return await ItemModel.updateOne({ barcode }, data)
    }

}