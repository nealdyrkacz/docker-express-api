import App from "./app";
import dotenv from "dotenv";


require('./db/models/index')

// initialize configuration
dotenv.config();

var app = new App()

app.start();
// port is now available to the Node.js runtime 
// as if it were an environment variable
/*const PORT= <string>process.env.SERVER_PORT;

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})*/