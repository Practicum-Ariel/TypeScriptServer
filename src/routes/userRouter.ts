
import { Request, Response, Router } from 'express'
const router = Router()

import UserService from '../services/UserService'
import Mapper from '../Mapper'



router.post('/', async (req: Request, res: Response) => {
    try {
        // email , fullName
        let userBody = Mapper(AddUserRequest,req.body)

        console.log("body from router", userBody);
        let user = await UserService.addNewUser(userBody)
        res.send(user)
    }
    catch (err) {
        console.log(err);
        res.status(480).send(err)

    }
})

export default router