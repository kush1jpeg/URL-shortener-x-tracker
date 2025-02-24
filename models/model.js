const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    shortID: { 
        type: String, 
        required: true, 
        unique: true 
    },
    ID: { 
        type: String, 
        required: true 
    },
    visit: [{ 
        timestamp: { type: Date } 
    }]
}, { timestamps: true });

const URL = mongoose.model('URL', schema);

module.exports = {URL}; //remember URL is fnctn but here You are exporting an object
                        //that contains URL as a property. This allows you to use 
                        // destructuring when importing:
