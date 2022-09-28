import { Request, Response } from "express";
import { linkService } from "../services/linkService";


const create = async (request: Request, response: Response) => {
    const url = request.body.url;
    try {
        return response
            .status(200)
            .json({ linkReduzido: await linkService.shortenUrl(url) });
    } catch (error) {
        return response
            .status(400)
            .json("Algo de errado aconteceu");
    }
};

const get = async (request: Request, response: Response) => {
    const { url } = request.params;
    try {
        return response
            .status(200).redirect(await linkService.getUrl(url));
    } catch (error) {
        return response
            .status(404)
            .json("Not Found");
    }
};

const linkController = { create, get };

export { linkController };