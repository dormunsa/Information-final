const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
    author: { type: String, required: true },
    description: { type: String, required: false },
    name: { type: String, required: true },
    docNumber: { type: Number, required: true, index: true },
    isActive: { type: Boolean, required: true }
  },
  { collection: 'documents' });
module.exports = mongoose.model( 'Document', docSchema );
