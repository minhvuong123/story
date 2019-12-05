const express = require('express');
const Router = express.Router();

// generateId
const generateId = require('../../helpers/generateId');

// model
const {
  Story: StoryModel,
  Chapter: ChapterModel,
} = require('../../models'); // remember define to table in mysql

// response 
const { handleSuccess, handleError } = require('../../helpers/response');

Router.post('/', async (req, res) => {
    try {
        const { page, limit } = req.body;

        if(!page || !limit) {
            handleError(res, { code: 400, msg: "Invalid values" });
            return;
        }
        const offset = (page - 1) * limit;
        
        const chapters = await ChapterModel.getAll( [], {}, { offset, limit } );

        handleSuccess(res, { chapters });
    } catch (err) {
        handleError(res, { code: 500, msg: "Server is error" });
    }
})

Router.post('/add', async (req, res) => {
  try {
    const { ...chapterRequest } = req.body;
    const { storyID } = chapterRequest;

    if( !chapterRequest ) {
      handleError(res, { code: 400, msg: "Invalid values" });
      return;
    }

    const storyCheck = await StoryModel.getAll([], { where: { id: storyID } });

    if(storyCheck.length){

      const chapterEntity = {...chapterRequest};

      const chapter = await ChapterModel.add(chapterEntity);   

      if(!chapter) {
        handleError(res, { code: 400, msg: "Creating position is failed" });
        return;
      }

      handleSuccess(res, { chapter });
    }

    handleError(res, { code: 400, msg: "StoryID is not found" });
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

        const result = await ChapterModel.delete({ where: { id } });
        
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
        const { id, ...chapter } = req.body;
        const { storyID }  = chapter;

        if( !id || !chapter ) {
            handleError(res, { code: 400, msg: "Invalid values" });
            return;
        }

        // check categoryID
        if(storyID){
          const storyCheck = await StoryModel.getAll([], { where: { id: storyID } });
          if( !storyCheck.length ){
            handleError(res, { code: 400, msg: "StoryID is not found" });
          }
        }

        
        const chapterCheck = await ChapterModel.getAll([], { where : { id }});

        if(chapterCheck.length){
          // result = [1] is mysql change
          // result = [0] is mysql not change
          await ChapterModel.modify( chapter , { where: { id } });

          handleSuccess(res, { msg: 'Update is success' });
        }

        handleError(res, { code: 400, msg: "id not found" });
        
    } catch (err) {
        handleError(res, { code: 500, msg: "Server is error" });
    }
})


module.exports = Router;