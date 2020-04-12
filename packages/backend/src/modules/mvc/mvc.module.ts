import {Module} from '@nestjs/common';
import {MvcService} from './mvc.service';
import {MvcController} from './mvc.controller';

@Module({
  controllers: [MvcController],
  providers: [MvcService],
  exports: [MvcService],
})
export class MvcModule {}
