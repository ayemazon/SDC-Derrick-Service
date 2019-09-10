const saveImageUrl = require('./index').saveImageUrl;
const deleteDB = require('./index').deleteDB;
const data = require('./fakeDataGenerator').data;

db.imageGallery.insertMany([
  { url: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s1.jpg' },
  { url: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s2.jpg' },
  { url: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s3.jpg' },
  { url: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s4.jpg' },
  { url: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s5.jpg' },
  { url: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s6.jpg' },
  { url: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s7.jpg' },
  { url: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s8.jpg' },
  { url: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s9.jpg' },
  { url: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s10.jpg' },
  { url: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s11.jpg' },
  { url: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s12.jpg' },
  { url: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s13.jpg' },
  { url: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s14.jpg' },
  { url: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s15.jpg' },
])

// query DB  and if number of items is less than 10 million add 100k more records into DB


