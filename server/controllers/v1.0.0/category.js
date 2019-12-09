const express = require('express');
const Router = express.Router();

// generateId
const generateId = require('../../helpers/generateId');

// model
const {Category: CategoryModel} = require('../../models'); // remember define to table in mysql

// response 
const { handleSuccess, handleError } = require('../../helpers/response');

Router.get('/', async (req, res) => {
  try {
      const categories = await CategoryModel.getAll( [], {});

      handleSuccess(res, { categories });
  } catch (err) {
      handleError(res, { code: 500, msg: "Server is error" });
  }
})

Router.post('/', async (req, res) => {
    try {
        const { page, limit } = req.body;

        if(!page || !limit) {
            handleError(res, { code: 400, msg: "Invalid values" });
            return;
        }
        const offset = (page - 1) * limit;
        
        const categories = await CategoryModel.getAll( [], {}, { offset, limit } );

        handleSuccess(res, { categories });
    } catch (err) {
        handleError(res, { code: 500, msg: "Server is error" });
    }
})

Router.post('/add', async (req, res) => {
    try {
        const { ...categoryRequest } = req.body;

        if( !categoryRequest.name ) {
          handleError(res, { code: 400, msg: "Invalid values" });
          return;
        }

        const categoryEntity = {...categoryRequest};

        const category = await CategoryModel.add(categoryEntity);

        if(!category) {
          handleError(res, { code: 400, msg: "Creating position is failed" });
          return;
        }

        handleSuccess(res, { category });
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

        const result = await CategoryModel.delete({ where: { id } });
        
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
        const { id, ...category } = req.body;

        if( !id || !category ) {
            handleError(res, { code: 400, msg: "Invalid values" });
            return;
        }

        const categoryCheck = await CategoryModel.getAll([], { where : { id }});

        if(categoryCheck.length){
          // result = [1] is mysql change
          // result = [0] is mysql not change
          await CategoryModel.modify( category , { where: { id } });

          handleSuccess(res, { msg: 'Update is success' });
        }

        handleError(res, { code: 500, msg: "id not found" });
        
    } catch (err) {
        handleError(res, { code: 500, msg: "Server is error" });
    }
})


module.exports = Router;