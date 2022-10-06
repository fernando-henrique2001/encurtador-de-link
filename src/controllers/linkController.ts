import { NextFunction, Request, Response } from "express";
import ErrorAPI from "../error/ErrorAPI";
import linkService from "../services/linkService";


const create = async (request: Request, response: Response) => {
    const url = request.body.url;
    return response
        .status(200)
        .json({ linkReduzido: await linkService.shortenUrl(url) });
};

const get = async (request: Request, response: Response, next: NextFunction) => {
    const { url } = request.params;
    try {
        return response
            .status(200).redirect(await linkService.getUrl(url));
    } catch (error) {
        next(new ErrorAPI("NOT_FOUND", "Not Found"));
    }
};

export default { create, get };