var calc = require("../model/Budget.schema");

function insert(req, res) {
  var budget = new calc({
    amount: req.body.amount,
    description: req.body.description
  });

  budget.save()
    .then(() => {
      res.json({
        status: "OK",
        message: "Record Inserted"
      });
    })
    .catch(() => {
      res.json({
        status: "NOK",
        message: "Record Does Not Inserted"
      });
    });
}

function select(req, res) {
  calc.find()
    .then(data => {
      res.json({
        status: "OK",
        message: data
      });
    })
    .catch(err => {
      res.json({
        status: "NOK",
        message: err
      });
    });
}

// function update(req, res) {
//   calc.updateOne({
//       amount: req.body.amount,
//       description: req.body.description
//     })
//     .then(() => {
//       res.json({
//         status: "OK",
//         message: "Record Updated Successfully"
//       });
//     })
//     .catch(() => {
//       res.json({
//         status: "NOK",
//         message: "Failed To Update"
//       });
//     });
// }

function remove(req, res) {
  calc.deleteOne({
      _id: req.body._id
    })
    .then(() => {
      res.json({
        status: "OK",
        message: "Record Deleted Successfully"
      });
    })
    .catch(() => {
      res.json({
        status: "NOK",
        message: "Record Can Not Be Deleted"
      });
    });
}

module.exports.insert = insert;
module.exports.select = select;
// module.exports.update = update;
module.exports.remove = remove;
