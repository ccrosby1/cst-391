// original code was throwing error...
import express from 'express'; // import Express
import type { Request, Response } from 'express'; // import Request/Response types


const app = express(); // create instance of Express

const port = 3000; // define port for server to listen on


// defines route handler for GET requests and defines request/response objects
app.get('/', (req: Request, res: Response) => {

// sends the response back to client
res.send('Hello World from TypeScript!');

});
// starts server listening on specific port
app.listen(port, () => {

// prints message to console to show server running
console.log(`Example app listening at http://localhost:${port}`)

});
