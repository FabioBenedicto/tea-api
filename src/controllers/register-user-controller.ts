import { type Request, type Response } from 'express';

import { PrismaUserRepository } from '@repositories/prisma/prisma-user-repository';

import { RegisterUserService } from '@services/register-user-service';

export class RegisterUserController {
  async handle(req: Request, res: Response) {
    const { firstName, lastName, email, password } = req.body;

    const prismaUserRepository = new PrismaUserRepository();
    const registerUserService = new RegisterUserService(prismaUserRepository);

    await registerUserService.execute({
      firstName,
      lastName,
      email,
      password,
    });

    return res.status(201).send();
  }
}
