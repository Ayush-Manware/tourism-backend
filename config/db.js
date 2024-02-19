const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const mongocloudURL = "mongodb+srv://ayushmanware2001:Axb3Li538e9RPf2f@clustertour.sk9u7ua.mongodb.net/tour-database?retryWrites=true&w=majority";

const Connection = async () => {
    try {
        await mongoose.connect(mongocloudURL);
        console.log("Connected Successfully");
    } catch (err) {
        console.error("Something went wrong in the connection process:", err);
    }
};

module.exports = { Connection };
