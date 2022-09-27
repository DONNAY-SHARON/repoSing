const express = require('express');
const app = express();
const path = require("path");
const readline = require("readline-sync");
const port = 1743
const { Pool } = require("pg");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
var player = require('play-sound')(opts = {})

 

app.set("view engine", "ejs");
app.set("views","./views"); 
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sing",
  password: "sharonrosedonnay",
  port: 5432
});
console.log("Connexion réussie à la base de données");


// Connexion à la base de donnée PostgreSQL

const sql_create = `CREATE TABLE IF NOT EXISTS match (
  ID SERIAL PRIMARY KEY,
  GAGNANT VARCHAR(255) ,
  PSG SERIAL NOT NULL,
  OM SERIAL
);`;
pool.query(sql_create, [], (err, result) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Création réussie de la table 'match'");
  // Alimentation de la table
  const sql_insert = `INSERT INTO match (ID, GAGNANT, PSG, OM) VALUES
    (1, 'Paris Saint Germain', 8, 5),
    (2, 'Paris Saint Germain', 7, 6),
    (3, 'Olympique de Marseille', 4, 9)
  ON CONFLICT DO NOTHING;`;
  pool.query(sql_insert, [], (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    const sql_sequence = "SELECT SETVAL('match_ID_Seq', MAX(ID)) FROM match;";
    pool.query(sql_sequence, [], (err, result) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Alimentation réussie de la table 'match'");
    });
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// GET /
app.get("/", (req, res) => {
  
  res.render("index");
 
});




app.post("/", async (req, res) => {
  let om = req.body.om; 
  let psg = req.body.psg;
  console.dir(om);
 console.dir(psg);
 

 const sql = "INSERT INTO match (GAGNANT, PSG, OM) VALUES ($1, $2, $3)";
  const book = [req.body.gagnant, req.body.psg, req.body.om];
  pool.query(sql, book, (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    
  });
  
  res.redirect("/livres");
});
// GET /about
app.get("/about", (req, res) => {
  res.render("about");
});

// GET /livres
app.get("/livres", (req, res) => {
  const sql = "SELECT * FROM match ORDER BY ID ";
  pool.query(sql, [], (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    res.render("livres", { model: result.rows });
  });


});

// GET /livres
app.get("/livres", (req, res) => {
  const sql = "SELECT * FROM match WHERE ID=3";
  pool.query(sql, [], (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    res.render("livres", { voir: result.rows });
  });
});


// GET /create
app.get("/livres", (req, res) => {
  res.render("livres", { model: {} });
});


// GET /edit/5
app.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM match WHERE ID = $1";
  pool.query(sql, [id], (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    res.render("edit", { model: result.rows[0] });
  });
});

// POST /edit/5
app.post("/livres/:id", (req, res) => {
  const id = req.params.id;
  const book = [req.body.gagnant, req.body.psg, req.body.om, id];
  const sql = "UPDATE match SET GAGNANT = $1, PSG = $2, OM = $3 WHERE (ID = $4)";
  pool.query(sql, book, (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    res.redirect("/livres");
  });
});

// GET /delete/5
app.get("/livres/7", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM match WHERE ID = 7";
  pool.query(sql, [id], (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    res.render("livres", { model: result.rows[0] });
  });
});

// POST /delete/5
app.post("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM match WHERE ID = ";
  pool.query(sql, [id], (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    res.redirect("/livres");
  });
});