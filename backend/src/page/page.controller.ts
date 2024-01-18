import { Body, Controller, Post, Delete, UseGuards, Get, Req, Response, Put } from '@nestjs/common';
import { PageService } from './page.service';
import * as bcrypt from 'bcrypt';
@Controller('page')
export class PageController {
  constructor(
    private readonly pageService: PageService,
  ) {};

  @Put('set')
  async setPageInfo(@Body() body) {
    const isValid = await bcrypt.compare(process.env.SECRET_KEY, body.hash);
    if (!isValid) {
      return ({
        code: 403,
        message: "Invalid hash"
      })
    }
    const result = await this.pageService.set(body.titleBlock, body.mainTitleBlock, body.descriptionBlock, body.titleInfo, body.descriptionInfo, body.buttonLink, body.buttonText, body.priceTitleFirst, body.priceCostsFirst, body.priceTitleSecond, body.priceCostsSecond);
    return result;
  };

  @Get()
  async getPage() {
    const result = await this.pageService.get();
    return result;
  }
}