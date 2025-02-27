// to use Express -> npm i express
// then install its devDependencies -> npm i --save-dev @types/express

import express, {Response, Request} from "express";

const app = express();
const port = 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
// listens for connections

app.get("/", (req : Request,res: Response) => {
    res.send("<h1>Hello TypeScript!!, learning backend with TS using express</h1>") // sends a response
})