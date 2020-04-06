import {Module} from '@nestjs/common';
import {CoreModule} from './modules/core/core.module';
import {LoggerModule} from 'nestjs-pino';

const moduleParams = {
  imports: [LoggerModule.forRoot(), CoreModule],
  providers: [],
};

@Module(moduleParams)
export class AppModule {}
