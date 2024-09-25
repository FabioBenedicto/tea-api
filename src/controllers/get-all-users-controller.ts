import { type Request, type Response } from 'express';

import { PrismaUserRepository } from './../repositories/prisma/prisma-user-repository';

import { GetAllUsersService } from '@services/get-all-users-service';

export class GetAllUsersController {
  async handle(_req: Request, res: Response) {

    const prismaUserRepository = new PrismaUserRepository();
    const getAllUsersService = new GetAllUsersService(prismaUserRepository);

    const users = await getAllUsersService.execute();

    return res.status(200).send(users);
  }
}
