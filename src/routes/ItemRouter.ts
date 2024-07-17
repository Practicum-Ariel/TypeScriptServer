
import { Request, Response, Router } from 'express'
const router = Router()

import ItemService from '../services/ItemService'
import IItem from '../interfaces/IItem'

router.get('/', async (req, res) => {
    let items = ItemService.getAllItems()
    res.send(items)
})

router.get('/:barcode', async (req:Request, res:Response) => {
    try {
        let item = await ItemService.getSingleItem(Number(req.params.barcode))
        res.send(item)
    }
    catch (err) {
        console.log(err);
        res.status(404).send(err)

    }
})
router.put('/:barcode', async (req:Request, res:Response) => {
    try {
        let itemBody: Partial<IItem> = {
            name: req.body?.name,
            price: req.body?.price,
            amount: req.body?.amount
        }
        let item = await ItemService.updateItem(Number(req.params.barcode),itemBody)
        res.send(item)
    }
    catch (err) {
        console.log(err);
        res.status(404).send(err)

    }
})

// router.post('/', async (req: Request, res: Response) => {
//     try {
//         let itemBody: IItem = {
//             barcode: req.body?.barcode || 999,
//             name: req.body?.name || "",
//             price: req.body?.price || -1,
//             amount: req.body?.amount || 0
//         }
//         console.log("body from router", itemBody);
//         let item = await ItemService.addNewItem(itemBody)
//         res.send(item)
//     }
//     catch (err) {
//         console.log(err);
//         res.status(480).send(err)

//     }
// })

export default router