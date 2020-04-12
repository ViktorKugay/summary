import {CoreStatusResponse} from './dto/core-status.dto';
import {Controller, Get} from '@nestjs/common';
import {ApiOperation} from '@nestjs/swagger';

@Controller()
export class CoreController {
  @Get('/status')
  @ApiOperation({operationId: 'status', summary: 'status'})
  status(): CoreStatusResponse {
    return {status: 'success'};
  }
}
