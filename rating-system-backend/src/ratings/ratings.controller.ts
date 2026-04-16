import { Controller, Post, Body, UseGuards, Req, Get, Param } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { JwtGuard } from '../auth/jwt.guard';

@Controller('ratings')
export class RatingsController {
  constructor(private ratingsService: RatingsService) {}

  // ⭐ Submit rating
  @UseGuards(JwtGuard)
  @Post()
  rate(@Req() req: any, @Body() body: any) {
    const userId = req.user.userId;
    return this.ratingsService.rateStore(userId, body.storeId, body.rating);
  }

  // ⭐ Get average rating
  @Get('avg/:storeId')
  getAvg(@Param('storeId') storeId: string) {
    return this.ratingsService.getAverageRating(Number(storeId));
  }
}