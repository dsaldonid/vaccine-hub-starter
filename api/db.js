const { Client } = require("pg")
const { getDatabaseUri } = require("./config")
require("colors")

const db = new Client({ connectionString: getDatabaseUri() })

db.connect((err) => {
    if(err){
        console.error("Connection error".red, err.stack)
    } else {
        console.log("Successful connected to postgres db!!".blue)
    }
})

module.exports = db