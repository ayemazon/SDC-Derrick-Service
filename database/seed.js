const addToDB = require('../database/db').addToDB;

const seed = () => {
  var galleryImages = [];

  for ( var i = 0; i <= 5000000; i++) {
    galleryImages.push({
      imgid: i,
      imageurl: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s11.jpg'
    })
  }
  return galleryImages;
}
const seedData = seed();
addToDB(seedData);