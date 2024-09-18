import { type Request, type Response } from 'express';

import { PrismaUserRepository } from '@repositories/prisma/prisma-user-repository';

import { ChangeProfileDataService } from '@services/change-profile-data-service';
import { ValidateTokenService } from '@services/validate-token-service';

export class ChangeProfileDataController {
  async handle(req: Request, res: Response) {
    const prismaUserRepository = new PrismaUserRepository();
    const validateTokenService = new ValidateTokenService(prismaUserRepository);

    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new Error('Usuário não autenticado');
    }

    const { user } = await validateTokenService.execute({ token });

    const { emergency_phone_number, notes } = req.body;

    const profile_picture_url = req.file
      ? `http://${req.headers.host}/profile-picture/${req.file.filename}`
      : undefined;

    const changeProfileDataService = new ChangeProfileDataService(
      prismaUserRepository,
    );

    const { id } = user;

    const updatedUser = await changeProfileDataService.execute({
      id,
      emergency_phone_number,
      notes,
      profile_picture_url,
    });

    return res.status(200).send(updatedUser);
  }
}
