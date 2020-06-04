import { Module, HttpModule } from '@nestjs/common';

import { MainService } from './services/main.service';
import { CollectorService } from './services/collector.service';

@Module({
  providers: [MainService, CollectorService],
  imports: [HttpModule],
})
export class CronModule {}
