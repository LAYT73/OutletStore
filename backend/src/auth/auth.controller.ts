import { Body, Controller, Post, Delete, UseGuards, Get, Req, Response } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {};

  @Post('login')
  async login(@Body() body) {
    const result = await this.authService.login(body.login, body.password);
    return result;
  };
}