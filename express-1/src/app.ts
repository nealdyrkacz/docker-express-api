import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import { UserRoutes } from "./routes/userRoutes";
import { AuthRoutes } from "./routes/authRoutes";

class App {

    public app: express.Application;
    public userRoutePrv: UserRoutes = new UserRoutes();
    public authRoutePrv: AuthRoutes = new AuthRoutes();

    constructor() {
        this.app = express();
        this.config();    
        this.userRoutePrv.routes(this.app);
        this.authRoutePrv.routes(this.app);
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));

        /*****************************************
         *  var allowedOrigins = ['http://localhost:3000',
                      'http://yourapp.com'];
            app.use(cors({
            origin: function(origin, callback){
         ****************************************/
        this.app.use(cors());


        this.app.use(helmet());
    }

}

export default new App().app;