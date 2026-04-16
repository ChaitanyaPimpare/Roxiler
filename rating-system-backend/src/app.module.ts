import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { RatingsModule } from './ratings/ratings.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/jwt.guard';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [
    AuthModule,
    AdminModule,
    RatingsModule,
    StoresModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtGuard, // ✅ GLOBAL GUARD
    },
  ],
})
export class AppModule {}