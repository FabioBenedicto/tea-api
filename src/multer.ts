import multer from 'multer';
import path from 'path';

const storageImage = multer.diskStorage({
  destination: './upload/images',
  filename: (_req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`,
    );
  },
});

export const uploadImage = multer({
  storage: storageImage,
});
