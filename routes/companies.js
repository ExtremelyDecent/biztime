/** returns JSON for companies. */

router.get("/companies", async function (req, res, next) {
    try {
      const type = req.query.type;
      
      const results = await db.query(
        `SELECT id, name, type 
         FROM companies
         WHERE type='${type}'`);
  
      return res.json(results.rows);
    }
  
    catch (err) {
      return next(err);
    }
});