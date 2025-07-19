import { Router } from "express";
import { signup, login} from "../Controllers/auth.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;
