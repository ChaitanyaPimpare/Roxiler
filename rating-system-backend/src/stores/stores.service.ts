import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StoresService {
  constructor(private prisma: PrismaService) {}

  // 📋 Get all stores with avg rating + user rating
  async getAllStores(userId: number) {
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

      const userRatingObj = store.ratings.find(
        r => r.userId === userId
      );

      return {
        id: store.id,
        name: store.name,
        address: store.address,
        avgRating,
        userRating: userRatingObj ? userRatingObj.rating : null,
      };
    });
  }

  // 🔍 Search stores
  async searchStores(query: string, userId: number) {
    const stores = await this.prisma.store.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { address: { contains: query, mode: 'insensitive' } },
        ],
      },
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

      const userRatingObj = store.ratings.find(
        r => r.userId === userId
      );

      return {
        id: store.id,
        name: store.name,
        address: store.address,
        avgRating,
        userRating: userRatingObj ? userRatingObj.rating : null,
      };
    });
  }
}