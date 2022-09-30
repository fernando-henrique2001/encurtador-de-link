import crypto from "crypto";
import linkRepository from "../repositories/linkRepository";


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
        return await linkRepository.getUrl(shortUrl);
    }
    throw new Error()
};

export default { shortenUrl, getUrl };