'use strict' ; 

const peopleSchema = require('./people-schema');
exports.handler = async(event)=> {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        const {name} = JSON.parse(event.body); // convert body string into json obj

        let updated=await peopleSchema.update({id},{name},{age});
        
        return {
            statusCode:200,
            body: JSON.stringify([updated])
        }
        
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
    
   
}

