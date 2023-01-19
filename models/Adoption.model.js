const { Schema, model } = require("mongoose");

const adoptionSchema = new Schema({
    age: {
        type: String
    },
    gender: {
        type: String
    },
    sterilized: {
        type: Boolean
    },
    details: {
        type: String
    },
    image: {
        type: String
    },
    adopted: {
        type: Boolean
    }
});

const AdoptionModel = model ("Adoption", adoptionSchema);

module.exports = AdoptionModel;