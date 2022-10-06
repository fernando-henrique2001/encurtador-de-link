import express from "express";
import { router } from "./routes/routes";
import cors from "cors";
import errorHandler from './error/errorHandler';



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

app.use(errorHandler);
