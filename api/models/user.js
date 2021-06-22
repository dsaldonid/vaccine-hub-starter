const { UnauthorizedError } = require("../utils/errors")
const db = require("../db")

class User{
    static async login(credentials){
        //submit email and pass
        //if any fields missing throw error
        //
        // lookup the user in the db by email 
        // iuf the user is found, comapre the submitted password 
        //with the password in the db 
        // if there is a match, return the user
        // if any of this goes wrong throw an error
        throw new UnauthorizedError("Invalid emal/password combo")
    }

    static async register(credentials){
        //user submits email pw appoint status and number of appoint
        // if any are missing throw erro
        //
        // make sure not user already exists in the system withthat email 
        //if one does, throw an error
        //
        //take the users password, and hash it
        //take the users email and lowercase it
        //
        // create a new in the db with their info
        //return the user
    }
}

module.exports = User