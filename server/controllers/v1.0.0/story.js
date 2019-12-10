const express = require('express');
const Router = express.Router();

const Op = require('sequelize').Op;

// generateId
const generateId = require('../../helpers/generateId');

// model
const {
  Story: StoryModel,
  Category: CategoryModel,
  Chapter: ChapterModel,
} = require('../../models'); // remember define to table in mysql

// response 
const { handleSuccess, handleError } = require('../../helpers/response');


const uploadImg = require('../../helpers/upload');


// Router.post('/upload', uploadImg.fields([{name: 'imgUrl'}, {name: 'imgThumb'}]), (req, res) => {
//   try {
//     console.log(req.files.imgUrl[0].filename);
//   } catch (error) {
//     handleError(res, { code: 400, msg: "Data is error" });
//   }
//   // if(!req.files.imgUrl[0].filename && req.files.imgThumb[0].filename){
//   //   handleError(res, { code: 400, msg: "Data is error!" });
//   // }
//   // handleSuccess(res, { stories: 'abc' });
// })


Router.post('/', async (req, res) => {
    try {
        const { page, limit } = req.body;

        if(!page || !limit) {
            handleError(res, { code: 400, msg: "Invalid values" });
            return;
        }

        const offset = (page - 1) * limit;
        
        const stories = await StoryModel.getAll( [], { include: [{ model: CategoryModel}] }, { offset, limit } );

        handleSuccess(res, { stories });
    } catch (err) {
        handleError(res, { code: 500, msg: "Server is error" });
    }
})

Router.post('/search', async (req, res) => {
  try {
      const { page, limit, slugName, values } = req.body;

      if(!page || !limit) {
          handleError(res, { code: 400, msg: "Invalid values" });
          return;
      }
      
      const category = await CategoryModel.getAll(['id'], {where: {slugName}});
      const categoryID = category[0].dataValues.id;

      const offset = (page - 1) * limit;
      
      const stories = await StoryModel.getAll( [], { where: { categoryID, name: {[Op.like]: [`%${values}%`]} } }, { offset, limit } );

      // const storyLegnth = await StoryModel.getAll( [], { where: { categoryID }} );
      // const totalPaginate = storyLegnth.length;
    
      handleSuccess(res, { stories });
  } catch (err) {
      handleError(res, { code: 500, msg: "Server is error" });
  }
})

Router.post('/category', async (req, res) => {
  try {
      const { page, limit, slugName } = req.body;

      if(!page || !limit) {
          handleError(res, { code: 400, msg: "Invalid values" });
          return;
      }
      
      const category = await CategoryModel.getAll(['id'], {where: {slugName}});
      const categoryID = category[0].dataValues.id;

      const offset = (page - 1) * limit;
      
      const stories = await StoryModel.getAll( [], { where: { categoryID }, include: [{ model: CategoryModel}] }, { offset, limit } );

      const storyLegnth = await StoryModel.getAll( [], { where: { categoryID }} );
      const totalPaginate = storyLegnth.length;
    
      handleSuccess(res, { stories, totalPaginate });
  } catch (err) {
      handleError(res, { code: 500, msg: "Server is error" });
  }
})

Router.post('/detail', async (req, res) => {
  try {
      const { slugName, page, limit } = req.body;
      
      if(!slugName) {
          handleError(res, { code: 400, msg: "Invalid values" });
          return;
      }

      const offset = (page - 1) * limit;

      const story = await StoryModel.getAll( [], { where: { slugName } });
      
      const storyID = story[0].dataValues.id;

      const totalPaginate = Math.ceil(story[0].dataValues.totalChapter / 10); ;

      const chapter = await ChapterModel.getAll( [], { where: { storyID }, order: [ ['chapterNumber', 'ASC'] ]},{ offset, limit } );

      handleSuccess(res, { story: story[0], chapter, totalPaginate });
  } catch (err) {
      handleError(res, { code: 500, msg: "Server is error" });
  }
})

Router.post('/add', uploadImg.fields([{name: 'imgUrl'}, {name: 'imgThumb'}]), async (req, res) => {
  console.log(req.body, req.files.imgUrl[0], req.files.imgThumb[0]);
  
  // try {
  //   const { ...storyRequest } = req.body;
  //   const { categoryID } = storyRequest;

  //   if( !storyRequest ) {
  //     handleError(res, { code: 400, msg: "Invalid values" });
  //     return;
  //   }

  //   const categoryCheck = await CategoryModel.getAll([], { where: { id: categoryID } });

  //   if(categoryCheck.length){

  //     const storyEntity = {...storyRequest};

  //     const story = await StoryModel.add(storyEntity);   

  //     if(!story) {
  //       handleError(res, { code: 400, msg: "Creating position is failed" });
  //       return;
  //     }

  //     handleSuccess(res, { story });
  //   } else {
  //     handleError(res, { code: 400, msg: "CategoryID is not found" });
  //   }
  // } catch (err) {
  //   handleError(res, { code: 500, msg: "Server is error" });
  // }
})

Router.delete('/delete', async (req, res) => {
    try {
        const { id } = req.body; 
        
        if(!id) {
            handleError(res, { code: 400, msg: "Invalid values" });
            return;
        }

        const result = await StoryModel.delete({ where: { id } });
        
        // result = 1 is success
        // result = 0 is fail
        if(!result){
            handleError(res, { code: 400, msg: "Delete is failed" });
            return;
        }

        handleSuccess(res, { msg: 'Delete is success' });
    } catch (err) {
        handleError(res, { code: 500, msg: "Server is error" });
    }
})

Router.put('/modify', async (req, res) => {
    try {
        const { id, ...story } = req.body;
        const { categoryID }  = story;

        if( !id || !story ) {
            handleError(res, { code: 400, msg: "Invalid values" });
            return;
        }

        // check categoryID
        if(categoryID){
          const categoryCheck = await CategoryModel.getAll([], { where: { id: categoryID } });
          if( !categoryCheck.length ){
            handleError(res, { code: 400, msg: "CategoryID is not found" });
          }
        }

        const storyCheck = await StoryModel.getAll([], { where : { id }});

        if(storyCheck.length){
          // result = [1] is mysql change
          // result = [0] is mysql not change
          await StoryModel.modify( story , { where: { id } });

          handleSuccess(res, { msg: 'Update is success' });
        }

        handleError(res, { code: 400, msg: "id not found" });
        
    } catch (err) {
        handleError(res, { code: 500, msg: "Server is error" });
    }
})



module.exports = Router;