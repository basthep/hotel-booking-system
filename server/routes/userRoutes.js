import express from "express"
import {protect} from "../middleware/authMiddleware.js";
import {getUserData,StoreRecentSearchedCities} from "../controllers/userController.js"

const userRouter = express.Router();

userRouter.get('/',protect, getUserData)
userRouter.post('/store-recent-search',protect, StoreRecentSearchedCities)

export default userRouter;