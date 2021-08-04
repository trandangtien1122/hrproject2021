const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.employeeBoard = (req, res) => {
    res.status(200).send("Employee Content.");
};

exports.managerBoard = (req, res) => {
    res.status(200).send("Manager Content.");
};

exports.allUsers = (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data);
        })
};
// exports.moderatorBoard = (req, res) => {
//     res.status(200).send("Moderator Content.");
// };