const { Schema, model } = require("mongoose");
const dataSchema = new Schema({
    companyUen: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },

    modified: {
        type: Date,
        default: Date.now
    },
}, { versionKey: false })

module.exports = model("FormData", dataSchema,);
