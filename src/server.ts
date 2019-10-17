import app from "./app";
import dotenv from "dotenv";

require('./db/models/index')

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime 
// as if it were an environment variable
const PORT= process.env.SERVER_PORT;

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})