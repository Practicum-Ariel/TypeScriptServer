import { Document, UpdateQuery } from 'mongoose';
import ItemController from '../controllers/ItemController';
import db from '../db'
import IItem from '../interfaces/IItem';

export default class ItemService {
    static getAllItems() {
        // let fromDB = {
        //     barcode: 213123,
        //     name: "sadas",
        //     price: 21,
        //     amount: 100,
        //     cost: 5
        // }

        // let item: IItem = {
        //     barcode: fromDB.barcode,
        //     name: fromDB.name,
        //     price: 0,
        //     // amount: 0,
        //     cost: 100
        // }
        return db.items;
    }

    static async getSingleItem(barcode: number): Promise<IItem | null> {
        let item = await ItemController.readOne(barcode)
        if (!item) throw ''

        return item
    }

    static async addNewItem(body: IItem) {
        let errors = []
        if (body.barcode == 999) errors.push("missing barcode")
        if (!body.name) errors.push("missing name")
        if (body.price < 0) errors.push("missing price")
        if (errors.length) throw errors

        console.log("body from service", body);

        return await ItemController.create(body)
    }

    static async updateItem(barcode: number, data: Partial<IItem>) {//: Promise<IItem | null> {
        let item = await ItemController.readOne(barcode)
        if (!item) throw 400;

        if (data.price) item.price = data.price
        if (data.name) item.name = data.name
        if (data.amount) item.amount = data.amount as number
        // await ItemController.update(barcode, data)

        // item.
        await (item as Document).save()
    }

}