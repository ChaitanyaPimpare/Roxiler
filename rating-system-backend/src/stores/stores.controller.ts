import { Controller, Get, Query, Req } from '@nestjs/common';
import { StoresService } from './stores.service';

@Controller('stores')
export class StoresController {
  constructor(private storesService: StoresService) {}

  // 📋 Get all stores
  @Get()
  getStores(@Req() req: any) {
    const userId = req.user.userId;
    return this.storesService.getAllStores(userId);
  }

  // 🔍 Search stores
  @Get('search')
  search(@Query('q') q: string, @Req() req: any) {
    const userId = req.user.userId;
    return this.storesService.searchStores(q, userId);
  }
}