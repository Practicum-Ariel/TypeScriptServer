
import { Router } from 'express'
const router = Router()

import ItemService from '../services/ItemService'

router.get('/', async(req,res)=>{
    let items = ItemService.getAllItems()
    res.send(items)
})
router.get('/:barcode', async(req,res)=>{
    let items = ItemService.getSingleItem(Number(req.params.barcode))
    res.send(items)
})

export default router