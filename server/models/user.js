const sha256 = require('sha256');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING(10)
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.INTEGER,
    },
    phone: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  User.associate = function(models) {
  };

  User.getAll = (attributes = [], query = {}, ...options) => 
    new Promise( async (resolve, reject) => {
      try {
        let users = null;
        if(attributes.length > 0){
          users = await User.findAll({ attributes, ...query, ...options[0] });
        } else {
          users = await User.findAll({ ...query, ...options[0] });
        }
        resolve(users);
      } catch (err) {
        err.code = 500;
        err.msg = "Query error"
        reject(err);
      }
    })

  User.add = (attributes = {}) =>
    new Promise( async (resolve, reject) => {
      attributes.password = sha256(attributes.password)
      try {
          const user = await User.create({ ...attributes });
          resolve(user);
      } catch (err) {1
        err.code = 500;
        err.msg = "Query error"
        reject(err);
      }
    }); 

  User.delete = (query = {}) =>
    new Promise( async (resolve, reject) => {
      try {
          const user = await User.destroy({ ...query });
          resolve(user);
      } catch (err) {
        err.code = 500;
        err.msg = "Query error"
        reject(err);
      }
    }); 

  User.modify = (attributes = {}, query = {}) =>
    new Promise( async (resolve, reject) => {
      try {
        if(attributes.password){
          attributes.password = sha256(attributes.password)
          const user = await User.update({ ...attributes }, {...query });
          resolve(user);
        } else {
          const user = await User.update({ ...attributes }, {...query });
          resolve(user);
        }
      } catch (err) {
        err.code = 500;
        err.msg = "Query error"
        reject(err);
      }
    }); 
  
  return User;
};