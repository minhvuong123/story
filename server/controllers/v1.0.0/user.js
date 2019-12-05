const express = require('express');
const Router = express.Router();

// generateId
const generateId = require('../../helpers/generateId');

// model
const {User: userModel} = require('../../models'); // remember define to table in mysql

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
        
        const users = await userModel.getAll( [], {}, { offset, limit } );
        
        handleSuccess(res, { users });
    } catch (err) {
        handleError(res, { code: 500, msg: "Server is error" });
    }
})

Router.post('/add', async (req, res) => {  
    try {
        const { ...userRequest } = req.body;

        if( !userRequest.email || !userRequest.password) {
          handleError(res, { code: 400, msg: "Invalid values" });
          return;
        }

        const userEntity = { id : generateId(10),  ...userRequest};

        const user = await userModel.add(userEntity);

        if(!user) {
          handleError(res, { code: 400, msg: "Creating position is failed" });
          return;
        }

        handleSuccess(res, { user });
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

        const result = await userModel.delete({ where: { id } });
        
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
        const { id, ...user } = req.body;

        if( !id || !user ) {
            handleError(res, { code: 400, msg: "Invalid values" });
            return;
        }

        const userCheck = await userModel.getAll([], { where: { id } });
        
        if(userCheck.length){
          // result = [1] is mysql change
          // result = [0] is mysql not change
          await userModel.modify( user , { where: { id } });

          handleSuccess(res, { msg: 'Update is success' });
        }

          handleError(res, { code: 400, msg: "ID is not found" });
    } catch (err) {
        handleError(res, { code: 500, msg: "Server is error" });
    }
})


module.exports = Router;