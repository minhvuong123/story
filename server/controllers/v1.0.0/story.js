const express = require('express');
const Router = express.Router();

// generateId
const generateId = require('../../helpers/generateId');

// model
const {
  Story: StoryModel,
  Category: CategoryModel,
} = require('../../models'); // remember define to table in mysql

// response 
const { handleSuccess, handleError } = require('../../helpers/response');


const upload = require('../../helpers/upload');


Router.post('/upload', upload.single('avatar'), (req, res) => {
  console.log(req.file);
  res.send('abc')
})


Router.post('/', async (req, res) => {
    try {
        const { page, limit } = req.body;

        if(!page || !limit) {
            handleError(res, { code: 400, msg: "Invalid values" });
            return;
        }
        const offset = (page - 1) * limit;
        
        const stories = await StoryModel.getAll( [], {}, { offset, limit } );

        handleSuccess(res, { stories });
    } catch (err) {
        handleError(res, { code: 500, msg: "Server is error" });
    }
})

Router.post('/add', async (req, res) => {
  try {
    const { ...storyRequest } = req.body;
    const { categoryID } = storyRequest;

    if( !storyRequest ) {
      handleError(res, { code: 400, msg: "Invalid values" });
      return;
    }

    const categoryCheck = await CategoryModel.getAll([], { where: { id: categoryID } });

    if(categoryCheck.length){

      const storyEntity = {...storyRequest};

      const story = await StoryModel.add(storyEntity);   

      if(!story) {
        handleError(res, { code: 400, msg: "Creating position is failed" });
        return;
      }

      handleSuccess(res, { story });
    }

    handleError(res, { code: 400, msg: "CategoryID is not found" });
  } catch (err) {
    handleError(res, { code: 500, msg: "Server is error" });
  }
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