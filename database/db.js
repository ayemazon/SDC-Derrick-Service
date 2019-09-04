const { Client } = require('pg')
const client = new Client({
  host: 'localhost',
  username: 'root',
  password: 'derkmcgerk13',
  database: 'sdc_postgres',
  port: 5432,
});

client.connect();

const addToDB = (imgid, url) => {
  const sql = `INSERT INTO gallery (imgid, url) VALUES ('${imgid}', '${url}')`;
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