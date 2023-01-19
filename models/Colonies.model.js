const { Schema, model } = require("mongoose");

const colonySchema = new Schema({
    location: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    }
})

const ColonyModel = model ("Colony", colonySchema);

module.exports = ColonyModel;