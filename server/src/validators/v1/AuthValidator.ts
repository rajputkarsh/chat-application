import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import BaseValidator from "../BaseValidator";

class AuthValidator extends BaseValidator{

  login = async (req: Request, res: Response, next: NextFunction) => {
    const loginValidationSchema = Joi.object({
      email    : Joi.string().email().lowercase().required(),
      password : Joi.string().min(8).required(),
    });
  
    this.handler(loginValidationSchema, req, res, next);    
  }

  signup = async (req: Request, res: Response, next: NextFunction) => {

    const registerValidationSchema = Joi.object({
        fullName   : Joi.string().required(),
        phoneNumber: Joi.string().required(),
        email      : Joi.string().email().required(),
        avatarURL  : Joi.string().uri().required(),
        password   : Joi.string().regex(RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)).min(8).required().messages({ "string.pattern.base" : "Password should have atleast one lowercase letter, one capital letter, one number and one special character."}),            
    })

    this.handler(registerValidationSchema, req, res, next)   
}  

}

export default new AuthValidator();