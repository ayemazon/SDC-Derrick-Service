require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
// const dbConnection = require('./../database/db.js');
const app = express();
const port = process.env.port || 3005;
const cors = require('cors');
const morgan = require('morgan');
const getImages = require('../database/mongoDB.js').getImages;

app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

app.use(cors());
app.use(morgan('dev'));

app.use('/products/gallery/:id', express.static(__dirname + '/../dist'));


app.get('/gallery', (req, res) => {
  getImages()
    .then((images) => {
      res.send(images);
    })
});

app.post('/gallery', (req, res) => {
  dbConnection.connection.query(`INSERT INTO xx_BLOB(IMAGE) VALUES(LOAD_FILE('someImage.jpg'))`, (req, res) => {
    if (err) {
      console.error(`Could not add image to database, see ${err}`)
    } else {
      console.log(`Image was added at ID: ${req.params.id}`)
    }
  })
})

app.put('/gallery', (req, res) => {
  dbConnection.connection.query(`UPDATE photos SET tagID = ${req.params.id} WHERE tagID = tagID`, (req, res) => {
    if (err) {
      console.error(`Something didnt go as expected`)
    } else {
      console.log(`This record has been updated!`)
    }
  })
})

app.delete('/gallery', (req, res) => {
  dbConnection.connection.query(`DELETE FROM photos WHERE condition`, (req, res) => {
        if (err) {
          console.error(err)
        } else {
          console.log(`Your record ?? has been deleted`);
        }
  })
})
app.listen(port, () => {
  console.log('Listening on port ' + port)
})