'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
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
  Category.associate = function(models) {
    // associations can be defined here
  };

  Category.getAll = (attributes = [], query = {}, ...options) => 
  new Promise( async (resolve, reject) => {
    console.log("abc");
    
    try {
      let categories = null;
      if(attributes.length > 0){
        categories = await Category.findAll({ attributes, ...query, ...options[0] });
      } else {
        categories = await Category.findAll({ ...query, ...options[0] });
      }
      resolve(categories);
    } catch (err) {
      err.code = 500;
      err.msg = "Query error"
      reject(err);
    }
  })

  Category.add = (attributes = {}) =>
  new Promise( async (resolve, reject) => {
    try {
        const category = await Category.create({ ...attributes });
        resolve(category);
    } catch (err) {1
      err.code = 500;
      err.msg = "Query error"
      reject(err);
    }
  }); 

  Category.delete = (query = {}) =>
  new Promise( async (resolve, reject) => {
    try {
        const category = await Category.destroy({ ...query });
        resolve(category);
    } catch (err) {
      err.code = 500;
      err.msg = "Query error"
      reject(err);
    }
  }); 

  Category.modify = (attributes = {}, query = {}) =>
  new Promise( async (resolve, reject) => {
    try {
        const category = await Category.update({ ...attributes }, {...query });
        resolve(category);
    } catch (err) {
      err.code = 500;
      err.msg = "Query error"
      reject(err);
    }
  }); 


  return Category;
};