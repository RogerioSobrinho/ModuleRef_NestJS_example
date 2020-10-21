import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AModule } from './a/a.module';
import { BModule } from './b/b.module';
import { CModule } from './c/c.module';

@Module({
  imports: [AModule, BModule, CModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
