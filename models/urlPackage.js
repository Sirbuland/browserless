const mongoose = require('mongoose');

let urlPackage = mongoose.model('urlPackage', {
    url_hash: {
        type: String,
        required: true,
    },
    url_base64: {
        type: String,
        required: true,
    },
    page_title: {
        type: String
    },
    file_type: {
        type: String
    },
    filename: {
        type: String
    },
    file_hash: {
        type: String,
        required: true
    },
    dir_path: {
        type: String,
        required: true
    }
})

module.exports = { urlPackage };