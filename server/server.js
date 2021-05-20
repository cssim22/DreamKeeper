const express = require("express");
const app = express();
const path = require("path");
const apiRouter = require('./routes/api');

const PORT = 3000;


//handle parsing the request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// handle requests for static files
app.use(express.static(path.resolve(__dirname, '../client'))); //THIS IS NOT RIGHT CURRENTLY


//define route handler
app.use('/api',apiRouter);

//

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Can/t find requested page.'));


// GLobal error nahdler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'A middleware express error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;