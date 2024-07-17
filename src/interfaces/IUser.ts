import { Document } from "mongoose"
import Permission from "../unions/U_Permission"


export default interface IUser extends Partial<Document> {
    email : string
    fullName : string
    password? : string
    permission : Permission
    isActive:boolean
}
