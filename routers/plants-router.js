const express = require("express");
const router = express.Router();

const Plants = require("../models/plants-model.js");
const validateUserId = require("../middleware/validate-user")

router.post("/plants", validateUserId, (req, res) => {
  console.log(req.params.id)
  Plants.insert({ ...req.body, user_id:req.decodedJwt.userid })
    .then((newPlant) => {
      res.status(201).json(newPlant)
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Error, new plant was not created"})
    })
})

router.get("/plants", validateUserId, (req, res, next) => {
  Plants.findByUser(req.decodedJwt.userid) 
    .then(plant => {
      res.status(200).json(plant);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/plants/:plantId", validateUserId, (req, res, next) => {
  Plants.findById(req.params.plantId)
    .then(plant => {
      res.status(200).json(plant);
    })
    .catch(err => {console.log(error.stack)
      next(err);
    });
  });

router.put("/plants/:plantId", validateUserId, (req, res, next) => {
  Plants.update(req.params.plantId, req.body) 
    .then(updated => {
      console.log(updated)
      res.status(200).json(updated);
    })
    .catch(err => {console.log(err.stack)
      next(err);
    });
});

router.delete("/plants/:plantId", validateUserId, (req, res, next) => {
  Plants.remove(req.params.plantId)
    .then(removed => {
      res.status(200).json({ message: "Plant has been deleted successfully." });
    })
    .catch(err => {console.log(err.stack)
      next(err);
    });
});

module.exports = router;