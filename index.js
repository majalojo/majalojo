import express from "express";
import "dotenv/config";
import authRoutes from "./authRoutes.js";
import { connectionDB } from "./lib/db.js";


const mojserver = express();
mojserver.use(express.json()); //parse the JSON data


//port
const PORT = process.env.PORT || 3000;
mojserver.listen(PORT,()=>{
     console.log(`App is listening on port ${PORT}`);
     try{
          connectionDB();
     }catch{
          console.log("Nije moguce povezati se na bazu")
     }
    
})

mojserver.use("/api", authRoutes);
