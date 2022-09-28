import axios from "axios";


const shortenUrl = async (url: string, shortString: string) => {
    if (url && shortString) {
        const data = { [shortString]: url };
        return await axios.post("http://localhost:3000/urls",
            data
        )
    };
}

const getUrl = async () => {
    const urlsArray: any = (await axios.get("http://localhost:3000/urls")).data;
    return urlsArray;
};

export default { shortenUrl, getUrl };