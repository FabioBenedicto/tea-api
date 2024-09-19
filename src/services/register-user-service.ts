import { PrismaClient } from '@prisma/client';
import { PrismaUserRepository } from '@repositories/prisma/prisma-user-repository';
import { hash } from 'bcrypt';

interface RegisterUserServiceData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export class RegisterUserService {
  constructor(private userRepository: PrismaUserRepository) {}

  async execute(req: RegisterUserServiceData) {
    const { email, firstName, lastName, password } = req;

    const prisma = new PrismaClient();

    if (!email || !firstName || !lastName || !password) {
      throw new Error('Falta informações');
    }

    const userAlreadyExists = await this.userRepository.findUniqueByEmail({
      email,
    });

    if (userAlreadyExists) throw new Error('Email já utilizado');

    const hashPassword = await hash(password, 8);

    await prisma.user.create({
      data: {
        email,
        password: hashPassword,
        first_name: firstName,
        last_name: lastName,
      },
    });
  }
}
