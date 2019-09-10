const addToDB = require('../database/db').addToDB;

const seed = () => {
  var galleryImages = [];

  for ( var i = 1000001; i <= 1000000; i++) {
      galleryImages.push({
        imgid: i,
        url: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s1.jpg'
      })
  }
  for (var i = 0; i < galleryImages.length; i++) {
    addToDB(galleryImages[i].imgid, galleryImages[i].imageurl);
  }
}

seed();

