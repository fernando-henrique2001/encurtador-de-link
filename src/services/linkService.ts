import crypto from "crypto";
import { linkRepository } from "../repositories/linkRepository";


const shortenUrl = async (url: string) => {
    if (url) {
        const shortString = crypto.randomBytes(3).toString('hex');
        if (await linkRepository.shortenUrl(url, shortString)) {
            return shortString;
        }
    }
    throw new Error()
};

const getUrl = async (shortUrl: string) => {
    if (shortUrl) {
        const urls = await linkRepository.getUrl();
        for (const url of urls) {
            for (let prop in url) {
                if (prop === shortUrl) {
                    return url[prop];
                }
            }
        }
    }
    throw new Error()
};

const linkService = { shortenUrl, getUrl };


export { linkService };