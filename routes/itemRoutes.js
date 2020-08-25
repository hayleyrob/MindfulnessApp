const router = require("express").Router();
const { Worksheet } = require("../models");

router.get("/worksheets", (req, res) => {
  Worksheet.find()
    .then((items) => res.json(items))
    .catch((err) => console.error(err));
});

router.post("/worksheets", (req, res) => {
  Worksheet.create(req.body)
    .then((item) => res.json(item))
    .catch((err) => console.error(err));
});

router.delete("/worksheets/:id", (req, res) => {
  Worksheet.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch((err) => console.error(err));
});

module.exports = router;
