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
    const user =  await this.userRepository.update({
      id,
      emergency_phone_number,
      notes,
      profile_picture_url,
    });

    return {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      profile_picture_url: user.profile_picture_url,
      notes: user.notes,
      emergency_phone_number: user.emergency_phone_number,
    }
  }
}
