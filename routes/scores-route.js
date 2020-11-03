var db = require("../models");

module.exports = function(app, db) {

  app.get("/api/scores/:id", function(req, res) {
    
    db.Score.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/scores", function(req, res) {
    db.Score.create(req.body).then(function(result) {
      res.json(result);
    });
  });
};
