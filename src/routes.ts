import express from 'express';

import { uploadImage } from './multer';

import { ValidateTokenController } from '@controllers/validate-token-controller';
import { LoginUserController } from '@controllers/login-user-controller';
import { RegisterUserController } from '@controllers/register-user-controller';
import { ChangeProfileDataController } from '@controllers/change-profile-data-controller';

const validateTokenController = new ValidateTokenController();
const loginUserController = new LoginUserController();
const registerUserController = new RegisterUserController();
const changeProfileDataController = new ChangeProfileDataController();

export const router = express.Router();

router.post('/validate', validateTokenController.handle);
router.post('/login', loginUserController.handle);
router.post('/register', registerUserController.handle);
router.patch(
  '/change',
  uploadImage.single('profile'),
  changeProfileDataController.handle,
);
