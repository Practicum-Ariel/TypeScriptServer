import db from '../db'

export default class ItemService {
    static getAllItems(){
        return db.items;
    }

   static getSingleItem(barcode : number){
        return db.items.find(it=>it.barcode==barcode)
    }

}