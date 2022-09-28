import { Router } from "express";
import linkController from "./controllers/linkController";

const router: Router = Router();

router.post("/shorten", linkController.create);
router.get("/shorten/:url", linkController.get);



export { router };