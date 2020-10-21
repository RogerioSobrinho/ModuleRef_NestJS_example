import { Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { AService } from './a/a.service';
import { BService } from './b/b.service';

@Injectable()
export class AppService implements OnModuleInit {
  private aService: AService;
  private bService: BService;
  constructor(private _moduleRef: ModuleRef) { }

  async onModuleInit() {
    this.aService = await this._moduleRef.get(AService, { strict: false });
    this.bService = await this._moduleRef.get(BService, { strict: false });
  }

  getHello(): string {
    this.aService.call();
    this.bService.call();
    return 'Hello World!';
  }
}
