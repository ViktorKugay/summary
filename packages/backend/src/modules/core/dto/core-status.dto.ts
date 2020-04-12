import {ApiProperty} from '@nestjs/swagger';

export class CoreStatusResponse {
  @ApiProperty()
  status!: 'success';
}
