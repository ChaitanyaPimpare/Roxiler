import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('admin')
@UseGuards(JwtGuard, RolesGuard)
@Roles('ADMIN')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post('add-user')
  createUser(@Body() body: any) {
    return this.adminService.createUser(body);
  }

  @Post('add-store')
  createStore(@Body() body: any) {
    return this.adminService.createStore(body);
  }

  @Get('dashboard')
  getStats() {
    return this.adminService.getDashboardStats();
  }

  @Get('users')
  getUsers() {
    return this.adminService.getUsers();
  }

  @Get('stores')
  getStores() {
    return this.adminService.getStores();
  }
}