module.exports = {
  HOST: "localhost",
  USER: "hostwebsite",
  PASSWORD: "",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};