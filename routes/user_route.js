import express from "express"
import { updateUser, deleteUser, signOut, getUsers, getUser } from "../controllers/user_controller.js";
import { verifyToken } from "../utils/verifyToken.js";





const router  = express.Router()


router.put('/update/:userId', verifyToken,  updateUser)
router.delete('/delete/:userId',verifyToken, deleteUser)
router.post('/signout', signOut)

router.get("/getusers", verifyToken, getUsers)

router.get('/:userId', getUser)

export default router;