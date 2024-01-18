import { Body, Controller, Post, Delete, UseGuards, Get, Req, Response, Put } from '@nestjs/common';
import { ButtonService } from './button.service';
import { AuthService } from 'src/auth/auth.service';
import * as bcrypt from 'bcrypt';

@Controller('button')
export class ButtonController {
  constructor(
    private readonly buttonService: ButtonService,
    private readonly authService: AuthService,
  ) {};

  @Get()
  async getButtons() {
    return await this.buttonService.getButtons();
  }

  @Put('update')
  async login(@Body() body) {
    const isValid = await bcrypt.compare(process.env.SECRET_KEY, body.hash);
    if (!isValid) {
      return ({
        code: 403,
        message: "Invalid hash"
      })
    }
    const result = await this.buttonService.updateButtons(body.buttons);
    return result;
  };
}