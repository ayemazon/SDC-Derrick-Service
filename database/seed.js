const addToDB = require('../database/db').addToDB;

const seed = () => {
  var galleryImages = [];

  for ( var i = 0; i <= 10000000; i++) {
      galleryImages.push({
        imgid: i,
        url: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s1.jpg'
      })
  }
  return galleryImages;
}
const seedData = seed();
addToDB(seedData);