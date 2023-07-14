// * IMPORT MODULES
import cors from "cors";
import pkg from "pg";
import dotenv from "dotenv";
import express from "express";

// * ASSIGN MODULES
const app = express();
const { Pool } = pkg;

// * ENV CONFIG REQUIRED
dotenv.config();

//ASSIGN DBSTRING TO ENV VAR
const dbString = process.env.DATABASE_URL;
//ASSIGN PORT TO ENV VAR
const PORT = process.env.PORT;

//CREATE A POOL CONNECTION FOR OUR DB AND API
const pool = new Pool({
  connectionString: dbString,
});

//MIDDLEWARE
app.use(express.json());
app.use(cors({ origin: "*", }));

//* RESTFUL API WITH ALL 5 ROUTES

//GET ALL
app.get("/blogs", async (req, res) => {
  try {
    const results = await pool.query(`SELECT * FROM blogs`);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//GET ONE REQUIRES AN ID
app.get("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const results = await pool.query(`SELECT * FROM blogs WHERE id = ${id}`);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//POST REQUIRES BODY DATA
app.post("/blogs", async (req, res) => {
  const post = req.body;
  console.log(post);
  try {
    const results = await pool.query(
      `INSERT INTO blogs (author, blogs_title, blogs_body) VALUES ( ('${post.author}'), ('${post.blogs_title}'), ('${post.blogs_body}') ) RETURNING *`
    );
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find Blog Post");
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//PUT REQUIRES AN ID AND BODY DATA
app.put("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  try {
    const results = await pool.query(
      `UPDATE blogs SET author = ('${post.author}'), blogs_title = ('${post.blogs_title}'), blogs_body = ('${post.blogs_body}') WHERE id = ${id} RETURNING *`
    );
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find Blog Post");
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//DELETE REQUIRES AN ID
app.delete("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const results = await pool.query(`DELETE FROM blogs WHERE id = ${id}`);
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find Blog Post");
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// SERVER PORT LISTENER
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
