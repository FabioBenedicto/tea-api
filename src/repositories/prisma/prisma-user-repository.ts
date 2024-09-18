import { prisma } from '../../prisma';

import {
    UserCreateData,
    UserUpdateData,
    UserFindUniqueByIdData,
    UserFindUniqueByEmailData,
    UserRepositories,
} from '../user-repository';

export class PrismaUserRepository implements UserRepositories {
    async create({ first_name, last_name, email, password }: UserCreateData) {
        await prisma.user.create({
            data: {
                first_name,
                last_name,
                email,
                password,
            },
        });
    }

    async update({
        id,
        profile_picture_url,
        notes,
        emergency_phone_number,
    }: UserUpdateData) {
        const user = await prisma.user.update({
            where: { id },
            data: { profile_picture_url, notes, emergency_phone_number },
        });

        return user;
    }

    async findUniqueById({ id }: UserFindUniqueByIdData) {
        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        });

        return user;
    }

    async findUniqueByEmail({ email }: UserFindUniqueByEmailData) {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        return user;
    }
}
