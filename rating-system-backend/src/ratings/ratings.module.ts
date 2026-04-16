import { Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsController } from './ratings.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule], // ✅ gives JwtService
  providers: [RatingsService],
  controllers: [RatingsController],
})
export class RatingsModule {}