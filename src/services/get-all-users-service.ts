import { PrismaUserRepository } from '@repositories/prisma/prisma-user-repository';

export class GetAllUsersService {
  constructor(private userRepository: PrismaUserRepository) {}

  async execute() {

    const users = await this.userRepository.findAll();

    return users;
  }
}
