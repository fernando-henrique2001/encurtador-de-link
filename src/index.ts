import express from "express";
import { router } from "./routes";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());


const port = 4000;

app.use("/", router);

app.listen(port, () => {
    console.log(
        `
        Yep this is working 🍺 🎉 
        App listen on port: ${port} 🥷
        `
    );
});