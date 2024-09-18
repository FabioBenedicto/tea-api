import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { PrismaUserRepository } from '@repositories/prisma/prisma-user-repository';

interface LoginUserServiceData {
  email: string;
  password: string;
}

export class LoginUserService {
  constructor(private userRepository: PrismaUserRepository) {}

  async execute(request: LoginUserServiceData) {
    const { email, password } = request;

    if (!email || !password) {
      throw new Error('Falta informações');
    }

    const user = await this.userRepository.findUniqueByEmail({ email });

    if (!user) {
      throw new Error('E-mail ou senha incorretos');
    }

    const passwordsMatch = await compare(password, user.password);

    if (!passwordsMatch) {
      throw new Error('Senha Incorreta');
    }

    const token = sign(user, process.env.TOKEN_SECRET_KEY || '', {
      subject: user.id.toString(),
      expiresIn: '7d',
    });

    return {
      user,
      token,
    };
  }
}
