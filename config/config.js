const mongoose = require("mongoose");
require("dotenv").config()


const connect = (connectionString) => {
    mongoose
        .connect(connectionString)
        .then(() => {
            console.log("working")
        })
        .catch((error) => console.log(error));
};

const startConnection = async (listenPort) => {
    try {
        await connect(process.env.MONGO_URI)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    startConnection
}
