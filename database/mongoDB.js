const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/imageGallery', { useNewUrlParser: true }, (err) => {
  if (err) {
    console.err(err);
  }
  console.log('Connected to DB');
});

const dbConnect = mongoose.connection;

let imageGallerySchema = mongoose.Schema({
  imgid: Number,
  url: String,
});

let ImageGalleryDetails = mongoose.model('imageGallery', imageGallerySchema);

let saveImageUrl = (imageDetails) => {
  ImageGalleryDetails.create(imageDetails, (err, image) => {
    if (err) {
      console.err(err);
    }
    console.log('Image saved to database');
  });
}

let findAllImages = () => {
  return ImageGalleryDetails.find({}).exec();
}

let deleteAImage = (imgid) => {
  ImageGalleryDetails.findByIdAndRemove(imgid).exec(() => {
    console.log('Image has been deleted.');
  });
}

module.exports.saveImageUrl = saveImageUrl;
module.exports.findAllImages = findAllImages;
module.exports.deleteAImage = deleteAImage;
