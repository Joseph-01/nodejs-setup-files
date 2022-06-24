const app = require("../app")
const connectDb = require("../config/config")
const PORT = process.env.PORT
console.log(PORT)

connectDb.startConnection(app.listen(PORT, () => {
    console.log(`http::/localhost:${PORT}`)
}))
