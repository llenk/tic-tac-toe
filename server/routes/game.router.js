const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "human_game" 
        WHERE "player_one" = $1 OR "player_two" = $1`;
        pool.query(queryText, [req.user.id]).then((result) => {
            res.send(result.rows[0]);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
})

module.exports = router;