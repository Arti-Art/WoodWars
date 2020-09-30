const mongoose = require("mongoose");

const treeSchema = mongoose.Schema({
    name: {
        type: String,
    },
    diameter: {
        type: Number,
    },
    height: {
        type: Number,
    },
    localisation: {
        type: String,
        coordinates: [],
    },
    locked: {

    },
    /*comments: [
        message : {type: String},
        owner : {
        },
        date : {
            type : Date,
            default : Date.now
        },
    ],*/
});

module.exports = mongoose.model("Tree", treeSchema);
