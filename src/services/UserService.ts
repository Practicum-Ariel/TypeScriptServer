import IUser from "../interfaces/IUser"

class UserService {

    static async addNewUser(body: AddUserRequest) {
        body.valid()

        console.log("body from service", body);

        // return await ItemController.create(body)
    }
}

export default UserService