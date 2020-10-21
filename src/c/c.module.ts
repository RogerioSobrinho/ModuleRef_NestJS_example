import { Module } from '@nestjs/common';
import { CService } from './c.service';

@Module({
  providers: [CService]
})
export class CModule {}
