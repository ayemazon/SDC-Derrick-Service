const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/imageGallery', { useNewUrlParser: true }, (err) => {
  if (err) {
    console.err(err);
  }
  console.log('Connected to DB');
});

const dbConnect = mongoose.connection;

let imageGallerySchema = mongoose.Schema({
  imgid: {
    type: String,
    unique: true
  },
  url: String,
});

let ImageGalleryDetails = mongoose.model('imageGallery', imageGallerySchema);

let saveImageUrl = (imageDetails) => {
  ImageGalleryDetails.insertOne({ur: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s1.jpg'});
  }
let deleteDB = () => {
  dbConnect.dropDatabase();
}
let findAImage = () => {
  return ImageGalleryDetails.findOne({_id: ObjectId('5d79ba63b710cd2e6a83991a')}).exec();
}
let getImages = () => {
  return ImageGalleryDetails.find().sort({_id: -1}).limit(1000)
}
let updateImage = () => {
  return ImageGalleryDetails.findOneAndUpdate({_id: ObjectId('5d79ba62b710cd2e6a83963f')}, {
    _id: ObjectId('5d79ba62b710cd2e6a839647')}, {upsert: true})
}

let deleteAImage = () => {
  ImageGalleryDetails.findByIdAndRemove({_id: ObjectId('5d79ba62b710cd2e6a8395e9')}).exec(() => {
    console.log('Image has been deleted.');
  });
}
var counter = 1;
let insertIntoMongoDb = () => {
  if (counter <= 700000) {
    ImageGalleryDetails.insertMany([
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
      { url: 'https://rpt14-sdc-derrick.s3.amazonaws.com/images/s15.jpg' }
    ])
    counter++;
    setTimeout(insertIntoMongoDb, 1);
  }
}
// the insertIntoMongoDb is being called 700000  times and each time its adding 15 records into the DB totalling 10.5 million
module.exports.saveImageUrl = saveImageUrl;
module.exports.findAImage = findAImage;
module.exports.deleteAImage = deleteAImage;
module.exports.deleteDB = deleteDB;
module.exports.updateImage = updateImage;
module.exports.insertIntoMongoDb = insertIntoMongoDb;

module.exports.getImages = getImages;
// module.exports.insertIntoMongoDb = insertIntoMongoDb;