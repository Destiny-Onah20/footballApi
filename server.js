import("./config/dbConfig.js")
import express from "express";
import teamRoutes from "./routes/footRoutes.js";


const app = express();
const port = 9999;
app.use(express.json());
app.use("/api/v1", teamRoutes)

app.listen(port, ()=>{
    console.log(`Listening to port: ${port}`)
})