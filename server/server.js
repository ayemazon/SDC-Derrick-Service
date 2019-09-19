require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
// const dbConnection = require('./../database/db.js');
const app = express();
const port = process.env.port || 3005;
const cors = require('cors');
const morgan = require('morgan');
const getImages = require('../database/mongoDB.js').getImages;
const saveImageUrl = require('../database/mongoDB.js').saveImageUrl;
const updateImage = require('../database/mongoDB.js').updateImage;
const deleteManyImage = require('../database/mongoDB.js').deleteManyImage;

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
  saveImageUrl(req.body.url)
})

app.put('/gallery', (req, res) => {
  updateImage()
})

app.delete('/gallery', (req, res) => {
  deleteManyImage(req.body.id)
})
app.listen(port, () => {
  console.log('Listening on port ' + port)
})