const mongoose = require("mongoose");

const treeSchema = new mongoose.Schema({
    full_name: {type: String, required: false},
    given_name: {type: String, required: false, default: null},
    size: {
        height: {type: Number, required: false},
        diameter: {type: Number, required: false},
    },
    value: {type: Number, required: false},
    geoloc: {
        lat: {type: Number, required: false},
        lon: {type: Number, required: false},
    },
    owner_id: {
        type: mongoose.ObjectId,
        ref: "Account",
        required: false,
        default: null,
    },
    is_locked: {type: Boolean, required: true, default: false},
    transactions_history: [
        {
            user_id: {type: mongoose.ObjectId, ref: "Account"},
            comment: {type: String},
        },
    ],
    wikipedia_page: {type: String, default: null},
    comments: [
        {
            content: {type: String},
            user_id: {type: mongoose.ObjectId, ref: "User"},
            datetime: {type: Date, default: Date.now},
        },
    ],
});

module.exports = mongoose.model("Tree", treeSchema);
