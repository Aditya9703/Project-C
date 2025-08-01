import connectDB from './config/db.js'
import dotenv from 'dotenv'
import {app} from './app.js'
dotenv.config();

connectDB()
.then(() => {

     app.on("error" , (error) => {
            console.log("Error occured" , error);
            throw error;
    });

    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Server is listening on PORT  : ${process.env.PORT}`);
    });

}).catch((err) => {
     console.log("DB connection error",err);
})