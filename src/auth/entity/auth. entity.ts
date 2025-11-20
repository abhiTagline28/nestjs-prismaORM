import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
  @ApiProperty({ description: 'JWT access token' })
  accessToken: string;
}
