import { Body, Controller, Post, Put, UseGuards, Get, Req, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt'

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

  @Put("update")
  async update(@Body() body) {
    const isValid = await bcrypt.compare("1iqd2huSD9812eak0sd", body.hash);
    if (!isValid) {
      return ({
        code: 403,
        message: "Invalid hash"
      })
    }
    return await this.authService.update(body.newLogin, body.newPassword, body.oldLogin, body.oldPassword);
  }
}