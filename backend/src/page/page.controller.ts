import { Body, Controller, Post, Delete, UseGuards, Get, Req, Response } from '@nestjs/common';
import { PageService } from './page.service';

@Controller('page')
export class PageController {
  constructor(
    private readonly pageService: PageService,
  ) {};

  @Post('login')
  async login(@Body() body) {
    const result = await this.pageService.login(body.login, body.password);
    return result;
  };
}