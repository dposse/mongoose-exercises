const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const personSchema = new Schema({
  hair: String,
  eyes: String,
  weight: Number,
  height: Number,
  salary: Number,
  numKids: Number,
  kids: [{
    hair: String,
    eyes: String,
    weight: Number,
    height: Number
  }]
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;