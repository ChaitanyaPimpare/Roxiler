import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RatingsService {
  constructor(private prisma: PrismaService) {}

  // ⭐ Submit or Update Rating
  async rateStore(userId: number, storeId: number, rating: number) {
    if (rating < 1 || rating > 5) {
      throw new BadRequestException('Rating must be between 1 and 5');
    }

    // Check if already rated
    const existing = await this.prisma.rating.findUnique({
      where: {
        userId_storeId: {
          userId,
          storeId,
        },
      },
    });

    if (existing) {
      // Update rating
      return this.prisma.rating.update({
        where: { id: existing.id },
        data: { rating },
      });
    }

    // Create new rating
    return this.prisma.rating.create({
      data: {
        userId,
        storeId,
        rating,
      },
    });
  }

  // ⭐ Get average rating of store
  async getAverageRating(storeId: number) {
    const ratings = await this.prisma.rating.findMany({
      where: { storeId },
    });

    if (ratings.length === 0) return 0;

    const avg =
      ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;

    return avg;
  }

  // ⭐ Get user's rating for a store
  async getUserRating(userId: number, storeId: number) {
    return this.prisma.rating.findUnique({
      where: {
        userId_storeId: {
          userId,
          storeId,
        },
      },
    });
  }
}