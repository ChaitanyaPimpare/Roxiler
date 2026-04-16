import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  // ➕ Add User
  async createUser(dto: any) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    return this.prisma.user.create({
      data: {
        ...dto,
        password: hashedPassword,
      },
    });
  }

  // ➕ Add Store
  async createStore(dto: any) {
    return this.prisma.store.create({
      data: dto,
    });
  }

  // 📊 Dashboard Stats
  async getDashboardStats() {
    const users = await this.prisma.user.count();
    const stores = await this.prisma.store.count();
    const ratings = await this.prisma.rating.count();

    return {
      totalUsers: users,
      totalStores: stores,
      totalRatings: ratings,
    };
  }

  // 📋 Get All Users
  async getUsers() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        address: true,
        role: true,
      },
    });
  }

  // 📋 Get All Stores with Rating
  async getStores() {
    const stores = await this.prisma.store.findMany({
      include: {
        ratings: true,
      },
    });

    return stores.map(store => {
      const avgRating =
        store.ratings.length > 0
          ? store.ratings.reduce((sum, r) => sum + r.rating, 0) /
            store.ratings.length
          : 0;

      return {
        ...store,
        avgRating,
      };
    });
  }
}