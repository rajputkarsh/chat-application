import express, { Request, Response } from "express";
import { authController } from "../../controllers";
import { authValidator } from "../../validators";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  authValidator.signup,
 async  (req: Request, res: Response) => {
    try {
      const result = await authController.signup(req.body.fullName, req.body.phoneNumber, req.body.email, req.body.password);
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

authRouter.post(
  "/login",
  authValidator.login,
  async (req: Request, res: Response) => {
    try {
      const result = await authController.login(req.body.email, req.body.password);
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

export default authRouter;
