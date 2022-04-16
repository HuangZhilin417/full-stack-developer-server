import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helloController
    from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://127.0.0.1/webdev'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(function(req,
                 res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
app.use(cors())
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')});
app.listen(process.env.PORT || 4000);