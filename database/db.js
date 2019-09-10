const { Client } = require('pg')
const client = new Client({
  host: 'localhost',
  username: 'root',
  password: 'derkmcgerk13',
  database: 'image_gallery',
  port: 5432,
});

client.connect();

const addToDB = (imgid, url) => {
  const sql = `INSERT INTO gallery (url) values ('https://rpt14-sdc-derrick.s3.amazonaws.com/images/s1.jpg')`;
  client.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Image URL inserted into DB');
    }
  })
}

const queryDB = (imgid, cb) => {
  const sql = `SELECT * FROM gallery where imgid=${imgid}`;
  client.query(sql, (err, row) => {
    return err ? console.log(err) : cb(row);
  });
}

const deleteFromDB = (imgid, cb) => {
  const sql = `DELETE FROM gallery where imgid=${imgid}`;
  client.query(sql, (err, row) => {
    return err ? console.log(err) : cb(row);
  });
}


module.exports = {
  addToDB,
  client,
  queryDB,
  deleteFromDB
};