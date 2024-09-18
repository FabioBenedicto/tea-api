import { verify } from 'jsonwebtoken';
import { User } from '@models/user-model';
import { PrismaUserRepository } from '@repositories/prisma/prisma-user-repository';

interface ValidateTokenServiceData {
  token: string;
}

export class ValidateTokenService {
  constructor(private userRepository: PrismaUserRepository) {}

  async execute(request: ValidateTokenServiceData) {
    const { token } = request;

    if (!token) {
      throw new Error('Usuário não autenticado');
    }

    const user = verify(token, process.env.TOKEN_SECRET_KEY || '') as User;

    const { id } = user;

    const userFromDatabase = await this.userRepository.findUniqueById({
      id,
    });

    if (!userFromDatabase) {
      throw new Error('Usuário não autenticado');
    }

    return {
      user,
    };
  }
}
