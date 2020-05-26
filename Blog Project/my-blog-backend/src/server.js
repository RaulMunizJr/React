{
  /*
    To make compatible with ES6
    npm install --save-dev @babel/core @babel/node @babel/preset-env
*/
}

import express from "express";
import bodyParser from "body-parser";
import MongoClient from "mongodb";
{
  /* MONGO DB*/
}
{
  /*
const articlesInfo = {
  "learn-react": {
    upvotes: 0,
    comments: [],
  },
  "learn-node": {
    upvotes: 0,
    comments: [],
  },
  "my-thoughts-on-resumes": {
    upvotes: 0,
    comments: [],
  },
};
*/
}
const app = express();
{
  /* get('endpoint', 'callback') */
  /* callback -> request (contains details about the request received) & response (send response back to who sent request) */
}

app.use(bodyParser.json());
{
  /* basic hello endpoints test 
app.get("/hello", (req, res) => res.send("Hello!"));
app.get("/hello/:name", (req, res) => res.send(`Hello ${req.params.name}`));
app.post("/hello", (req, res) => res.send(`Hello ${req.body.name}!`));
*/
}
{
  /* MONGO DB - important to avoid redundancy */
}
const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
    });
    const db = client.db("my-blog");

    await operations(db);

    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  }
};

{
  /* MONGO DB */
}
app.get("/api/articles/:name", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;

    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(articleInfo);
  }, res);
});

app.post("/api/articles/:name/upvote", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;

    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    await db.collection("articles").updateOne(
      { name: articleName },
      {
        $set: {
          upvotes: articleInfo.upvotes + 1,
        },
      }
    );
    const updatedArticleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });

    res.status(200).json(updatedArticleInfo);
  }, res);
});

{
  /* "LOCAL aka faceDB"
  articlesInfo[articleName].upvotes += 1;
  res
    .status(200)
    .send(
      `${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`
    );
*/
}

app.post("/api/articles/:name/add-comment", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  withDB(async (db) => {
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    await db.collection("articles").updateOne(
      { name: articleName },
      {
        $set: {
          comments: articleInfo.comments.concat({ username, text }),
        },
      }
    );
    const updatedArticleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });

    res.status(200).json(updatedArticleInfo);
  }, res);
});

app.listen(8000, () => console.log("Listening on port 8000"));

{
  /* to run server -> npx babel-node src/server.js */
  /* for nodemon -> npx nodemon --exec npx babel-node src/server.js */
}

{
  /* body-parser allows server to extract JSON data sent with request */
  /* npm install --save body-parser */
  /***********************************************************************************/
  /* allows the server to restart automatically when it senses changes have been made*/
  /* npm install --save-dev nodemon */
  /***********************************************************************************/
  /* install mongodb package into express server (make sure you're in backend dir)*/
  /* npm install --save mongodb */
}
