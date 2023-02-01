
import { Request, Response, NextFunction } from "express";
import Joi from "joi";

class BaseValidator {

    constructor(){
    }

    async handler (
        validator: Joi.ObjectSchema | Joi.ArraySchema, 
        req: Request,
        res: Response,
        next: NextFunction
    ) {
    
        try {
    
            const { error, value } = validator.validate(req.body)

            if (error) {

                res.json({
                    status: 401,
                    message: 'Invalid Input',
                    data: error.details.map(x => x.message).join(', ')
                });                

                return false

            } 
            
            req.body = value;

            next();

        } catch (err) {
            res.json({
                status: 500,
                message: err
            })
            return false
        }
    }
    
}

export default BaseValidator