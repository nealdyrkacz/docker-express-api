import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import { UserRoutes } from "./routes/userRoutes";
import { AuthRoutes } from "./routes/authRoutes";

import cluster from "cluster";
import os from "os";

class App {

    public app: express.Application;
    public userRoutePrv: UserRoutes = new UserRoutes();
    public authRoutePrv: AuthRoutes = new AuthRoutes();
    private workers: {[key: string]: cluster.Worker};
    private cpus: number;
    private PORT: string;

    constructor() {
        this.app = express();
        this.config();    
        this.userRoutePrv.routes(this.app);
        this.authRoutePrv.routes(this.app);
        this.workers = {};
        this.cpus = os.cpus().length;
        this.PORT = <string>process.env.SERVER_PORT;
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

    public start(): void {
        var self = this;
        if (cluster.isMaster) {
            console.log("************ EXPRESS SERVER START UP *************")
            for (var i = 0; i < this.cpus; i++) {
                this.spawn();
            }
            cluster.on('exit', function(worker: cluster.Worker){
                console.log('worker ' + worker.process.pid + ' died. spawning a new process...');
                delete self.workers[worker.process.pid];
                self.spawn();
            })
        } else {
           
            this.app.listen(this.PORT, () => {
                console.log('WORKER ' +  cluster.worker.process.pid + ' listening on port ' + this.PORT);
            })
        }
    }

    private spawn(){
        let worker: cluster.Worker = cluster.fork();
        this.workers[worker.process.pid] = worker;
        console.log("*********** WORKER: " + worker.process.pid + " SPAWNED ***********")
        return worker;
      }

}

//export default new App().app;
export default App;