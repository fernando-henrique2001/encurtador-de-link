import db from "../../src/data/db-config";

const shortenUrl = async (url: string, shortUrl: string) => {
    if (url && shortUrl) {
        const data = {
            shortUrl,
            url,
        };
        return db.insert(data).into("url");
    };
}

const getUrl = async (shortUrl: string) => {
    const urlsArray: any = await db.select("url").where({
        shortUrl,
    }).table("url");
    return urlsArray[0].url;
};

export default { shortenUrl, getUrl };