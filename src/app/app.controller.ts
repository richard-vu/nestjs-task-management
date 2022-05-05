import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Hello')
@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello-world')
  getHello(): string {
    return this.appService.getHello();
  }
}
