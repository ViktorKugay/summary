import {Controller, Get, Render, HttpCode} from '@nestjs/common';
import {MvcService} from './mvc.service';

@Controller()
export class MvcController {
  constructor(private readonly mvcService: MvcService) {}

  @Get()
  @HttpCode(200)
  @Render('index')
  buildIndexHtml() {
    return this.mvcService.buildIndexHtml();
  }
}
