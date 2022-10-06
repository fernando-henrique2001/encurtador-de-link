import crypto from "crypto";
import linkRepository from "../repositories/linkRepository";
import ErrorAPI from "../error/ErrorAPI";


const shortenUrl = async (url: string) => {
    if (url) {
        const shortString = crypto.randomBytes(3).toString('hex');
        if (await linkRepository.shortenUrl(url, shortString)) {
            return shortString;
        }
    }
    throw new ErrorAPI("BAD_REQUEST", "Problem with request body")
};

const getUrl = async (shortUrl: string) => {
    if (shortUrl) {
        return await linkRepository.getUrl(shortUrl);
    }
    throw new ErrorAPI("BAD_REQUEST", "Problem with request params");
};

export default { shortenUrl, getUrl };