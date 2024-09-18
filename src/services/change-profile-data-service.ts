import { PrismaUserRepository } from '@repositories/prisma/prisma-user-repository';

interface changeAboutMeServiceData {
  id: number;
  emergency_phone_number?: string;
  notes?: string;
  profile_picture_url?: string;
}

export class ChangeProfileDataService {
  constructor(private userRepository: PrismaUserRepository) {}

  async execute({
    id,
    emergency_phone_number,
    notes,
    profile_picture_url,
  }: changeAboutMeServiceData) {
    return await this.userRepository.update({
      id,
      emergency_phone_number,
      notes,
      profile_picture_url,
    });
  }
}
