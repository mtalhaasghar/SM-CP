require("dotenv").config()

module.exports = {
    DB: process.env.APP_DB,
    PORT: process.env.APP_PORT,
    SECRECT: process.env.APP_SECRET
} 