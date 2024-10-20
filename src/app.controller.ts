import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: 'Check if the application is healthy',
    description: 'Returns a string indicating if the application is healthy',
  })
  @Get()
  getIsHealthy(): string {
    return this.appService.getIsHealthy();
  }
}
