const models = require('../models/dreamModels');

const dreamController = {};

dreamController.getDreams = (req, res, next) => {
  console.log('req keys in dreamController.getDreams:',Object.keys(req));
  
  models.Dream.find({})
    .then((data) =>{
      res.locals.dreams = data;
      return next();
    })
    .catch((err) =>next({
      log:`dreamController.getDreams: ERROR ${err}`,
      message:  {err: 'error occured in dreamController.getDreams'}
    }));
};


dreamController.addDream = (req, res, next) => {
  console.log('req keys in dreamController.addDream:',Object.keys(req))
  
  models.Dream.create({req})
  .then((data) =>{
      
    res.locals.dreams = data;
    return next();
    })
    .catch((err) =>next({
      log:`dreamController.getDreams: ERROR ${err}`,
      message:  {err: 'error occured in dreamController.addDream'}
    }));
};

module.exports = dreamController;