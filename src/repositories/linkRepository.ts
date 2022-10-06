import db from "../../src/data/db-config";
import ErrorAPI from "../error/ErrorAPI";


const shortenUrl = async (url: string, shortUrl: string) => {
    if (url && shortUrl) {
        const data = {
            shortUrl,
            url,
        };
        return db.insert(data).into("url");
    };
    throw new ErrorAPI("BAD_REQUEST", "Problem with request body")
}

const getUrl = async (shortUrl: string) => {
    if (shortUrl) {
        const urlsArray: any = await db.select("url").where({
            shortUrl,
        }).table("url");
        return urlsArray[0].url;
    }
    throw new ErrorAPI("BAD_REQUEST", "Problem with request params")
};

export default { shortenUrl, getUrl };