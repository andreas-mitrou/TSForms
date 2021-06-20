import { IUser } from "./IUser";

export class Authentication {

    public Register(user:IUser) : boolean{
        return true;
    }
    public Login(username:string, password:string):IUser {
        let result = false;
        
        if(!username) throw new Error("Username is provided");

        if(!password) throw new Error("password is not provided");

        if(username == "1" && password == "2"){
            result = true;
        }

        return {
            Firstname:"Andreas",
            LastName:"Mitrou",
            email:"asda"
        };
    }
}