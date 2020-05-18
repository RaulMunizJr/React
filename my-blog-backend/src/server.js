{
  /*
    To make compatible with ES6
    npm install --save-dev @babel/core @babel/node @babel/preset-env
*/
}

import express from "express";
import bodyParser from "body-parser";

const app = express();
{
  /* get('endpoint', 'callback') */
  /* callback -> request (contains details about the request received) & response (send response back to who sent request) */
}

app.use(bodyParser.json());

app.get("/hello", (req, res) => res.send("Hello!"));
app.post("/hello", (req, res) => res.send(`Hello ${req.body.name}!`));

app.listen(8000, () => console.log("Listening on port 8000"));

{
  /* to run server -> npx babel-node src/server.js */
}

{
  /* body-parser allows server to extract JSON data sent with request */
  /* npm install --save body-parser */
}
