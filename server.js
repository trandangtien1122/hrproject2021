const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");


const app = express();

var corsOptions = {
    origin: "http://localhost:8000"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));


// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
const Role = db.role;
require('./app/routes/auth_routes')(app);
require('./app/routes/user_routes')(app);
// function initial() {
//     Role.create({
//         id: 1,
//         name: "employee"
//     });
//
//     Role.create({
//         id: 2,
//         name: "manager"
//     });
//     Role.create({
//         id: 3,
//         name: "admin"
//     });
// }
//
// db.sequelize.sync({ force: true }).then(() =>{
//     initial();
// });
db.sequelize.sync()
app.get("/", (req, res) => {
    res.json({message: "Welcome to bezkoder application."})
})
// require("./app/routes/turorial.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})