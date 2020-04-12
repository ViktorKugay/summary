import {CoreModule} from './modules/core/core.module';
import {MvcModule} from './modules/mvc/mvc.module';
import {LoggerModule} from 'nestjs-pino';
import {Module} from '@nestjs/common';
import {isTest} from './config';

const moduleParams = {
  imports: [CoreModule, MvcModule] as any,
};

if (!isTest) {
  moduleParams.imports.push(LoggerModule.forRoot());
}

@Module(moduleParams)
export class AppModule {}
