import { type Request, type Response } from 'express';

import { PrismaUserRepository } from '@repositories/prisma/prisma-user-repository';

import { ValidateTokenService } from '@services/validate-token-service';

export class ValidateTokenController {
  async handle(req: Request, res: Response) {
    const { token } = req.body;

    const prismaUserRepository = new PrismaUserRepository();
    const validateTokenService = new ValidateTokenService(prismaUserRepository);

    const user = await validateTokenService.execute({
      token,
    });

    return res.status(201).send({
      user,
    });
  }
}
