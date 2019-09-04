const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./../database/db.js');
const app = express();
const port = process.env.port || 3005;
const cors = require('cors');
const morgan = require('morgan');

app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

app.use(cors());
app.use(morgan('dev'));

app.use('/products/gallery/:id', express.static(__dirname + '/../dist'));

app.post('/')

app.get('/product/gallery/:id', (req, res) => {
  dbConnection.queryDB(req.params.id, (result) => {
    res.send(result);
  });
});

app.get('/data/grab', (req, res) => {
  dbConnection.connection.query(`SELECT * FROM photos`, (err, data) => {
    if(err){return cconsole.error(err, 'err')}
    res.send(data);
  })
})

app.post('/product', (req, res) => {
  dbConnection.connection.query(`INSERT INTO xx_BLOB(IMAGE) VALUES(LOAD_FILE('someImage.jpg'))`, (req, res) => {
    if (err) {
      console.error(`Could not add image to database, see ${err}`)
    } else {
      console.log(`Image was added at ID: ${req.params.id}`)
    }
  })
})

app.put('/product/gallery/:id', (req, res) => {
  dbConnection.connection.query(`UPDATE photos SET tagID = ${req.params.id} WHERE tagID = tagID`, (req, res) => {
    if (err) {
      console.error(`Something didnt go as expected`)
    } else {
      console.log(`This record has been updated!`)
    }
  })
})

app.delete('/product', (req, res) => {
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