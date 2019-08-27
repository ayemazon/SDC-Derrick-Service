const { Client } = require('pg')
const client = new Client({
  user: 'dbuser',
  host: 'localhost',
  database: 'sdc_postgres',
  password: '',
  port: 3211,
});

client.connect()

const addToDB = (imgid, imageurl) => {
  const sql = `INSERT INTO gallery (imgid, imageurl) VALUES ('${imgid}', '${imageurl}')`;
  client.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Image URL inserted into DB');
    }
  })
}

const queryDB = (id, cb) => {
  const sql = `SELECT * FROM gallery`;
  client.query(sql, (err, row) => {
    return err ? console.log(err) : cb(row);
  });
}

module.exports = {
  addToDB,
  client,
  queryDB
};