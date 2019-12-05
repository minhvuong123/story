'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chapter = sequelize.define('Chapter', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    storyID: DataTypes.INTEGER,
    chapterNumber: DataTypes.INTEGER
  }, {});
  Chapter.associate = function(models) {
    // associations can be defined here
  };

  Chapter.getAll = (attributes = [], query = {}, ...options) => 
  new Promise( async (resolve, reject) => {
    try {
      let chapters = null;
      if(attributes.length > 0){
        chapters = await Chapter.findAll({ attributes, ...query, ...options[0] });
      } else {
        chapters = await Chapter.findAll({ ...query, ...options[0] });
      }
      resolve(chapters);
    } catch (err) {
      err.code = 500;
      err.msg = "Query error"
      reject(err);
    }
  })

  Chapter.add = (attributes = {}) =>
  new Promise( async (resolve, reject) => {
    try {
        const chapter = await Chapter.create({ ...attributes });
        resolve(chapter);
    } catch (err) {1
      err.code = 500;
      err.msg = "Query error"
      reject(err);
    }
  }); 

  Chapter.delete = (query = {}) =>
  new Promise( async (resolve, reject) => {
    try {
        const chapter = await Chapter.destroy({ ...query });
        resolve(chapter);
    } catch (err) {
      err.code = 500;
      err.msg = "Query error"
      reject(err);
    }
  }); 

  Chapter.modify = (attributes = {}, query = {}) =>
  new Promise( async (resolve, reject) => {
    try {
        const chapter = await Chapter.update({ ...attributes }, {...query });
        resolve(chapter);
    } catch (err) {
      err.code = 500;
      err.msg = "Query error"
      reject(err);
    }
  }); 


  return Chapter;
};