
class AddUserRequest {

    email : string
    fullName : string

    constructor(email:string , fullName : string){
        this.email=email
        this.fullName=fullName
    }

    valid(){
        if(this.email ) throw new Error()
    }
}