import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskRequest {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}
