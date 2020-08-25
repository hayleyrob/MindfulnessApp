const { model, Schema } = require("mongoose");

const WorksheetSchema = new Schema({
  title: String,
  description: String,
  image: String,
  instructions: Array,
  worksheetId: String,
});

module.exports = model("Worksheet", WorksheetSchema);