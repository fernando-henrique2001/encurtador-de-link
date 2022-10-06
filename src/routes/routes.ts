import { Router, Response, Request, NextFunction, ErrorRequestHandler } from "express";
import linkController from "../controllers/linkController";
import routerAdapter from "./routerAdapter";

const router: Router = Router();

router.post("/shorten", routerAdapter(linkController.create));
router.get("/shorten/:url", routerAdapter(linkController.get));

router.get('*', (req, res) => res.sendStatus(404));


export { router };