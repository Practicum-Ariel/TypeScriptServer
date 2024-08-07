import mongoose from 'mongoose'
import IUser from '../interfaces/IUser'

const userSchema = new mongoose.Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        select: false
    },
    permission: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }, 
    isActive: {
        type: Boolean,
        default : true
    },
})

export default mongoose.model<IUser>('user', userSchema)

