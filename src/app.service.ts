import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getIsHealthy(): string {
    return 'is healthy';
  }
}
