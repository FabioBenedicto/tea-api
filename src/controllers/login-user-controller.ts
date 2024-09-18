import { type Request, type Response } from 'express';

import { PrismaUserRepository } from './../repositories/prisma/prisma-user-repository';

import { LoginUserService } from '@services/login-user-service';

export class LoginUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const prismaUserRepository = new PrismaUserRepository();
    const loginUserService = new LoginUserService(prismaUserRepository);

    const { user, token } = await loginUserService.execute({
      email,
      password,
    });

    return res.status(201).send({
      user,
      token,
    });
  }
}
