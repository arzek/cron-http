import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import { CollectorService } from './collector.service';

@Injectable()
export class MainService {
  constructor(private readonly collectorService: CollectorService) {}

  @Cron('* * * * * *')
  async handle() {
    await this.collectorService.main();
  }
}
