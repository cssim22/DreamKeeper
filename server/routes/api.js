const express = require('express');

const dreamController = require('../controllers/dreamController.js');

const router = express.Router();

router.get('/',
  dreamController.getDreams,
  (req, res) => res.status(200).json(res.locals.dreams)
);

router.post('/dream',
  dreamController.addDream,
  (req, res) => res.status(200).json(req.locals.dreams)
);

// router.put('/dream',
//   dreamController.editDream,
//   (req, res) => res.status(200).json({})
// );

// router.delete('/dream',
//   dreamController.deleteDream,
//   (req, res) => res.status(200).json({})
// );

module.exports = router;