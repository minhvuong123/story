'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    categoryID: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING,
    imgThumb: DataTypes.STRING,
    totalChapter: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Story.associate = function(models) {
    // associations can be defined here
  };

  Story.getAll = (attributes = [], query = {}, ...options) => 
  new Promise( async (resolve, reject) => {
    try {
      let stories = null;
      if(attributes.length > 0){
        stories = await Story.findAll({ attributes, ...query, ...options[0] });
      } else {
        stories = await Story.findAll({ ...query, ...options[0] });
      }
      resolve(stories);
    } catch (err) {
      err.code = 500;
      err.msg = "Query error"
      reject(err);
    }
  })

  Story.add = (attributes = {}) =>
  new Promise( async (resolve, reject) => {
    try {
        const story = await Story.create({ ...attributes });
        resolve(story);
    } catch (err) {1
      err.code = 500;
      err.msg = "Query error"
      reject(err);
    }
  }); 

  Story.delete = (query = {}) =>
  new Promise( async (resolve, reject) => {
    try {
        const story = await Story.destroy({ ...query });
        resolve(story);
    } catch (err) {
      err.code = 500;
      err.msg = "Query error"
      reject(err);
    }
  }); 

  Story.modify = (attributes = {}, query = {}) =>
  new Promise( async (resolve, reject) => {
    try {
        const story = await Story.update({ ...attributes }, {...query });
        resolve(story);
    } catch (err) {
      err.code = 500;
      err.msg = "Query error"
      reject(err);
    }
  }); 

  return Story;
};