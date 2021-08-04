module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("user", {
    full_name: {
      type: Sequelize.STRING
    },
    user_name: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    is_admin: {
      type: Sequelize.BOOLEAN
    },
    team: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    }
  });

  return Users;
};