import { Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { CService } from '../c/c.service';

@Injectable()
export class AService implements OnModuleInit {
  private cService: CService;
  constructor(private moduleRef: ModuleRef) { }
  async onModuleInit() {
    this.cService = this.moduleRef.get(CService, { strict: false })
  }
  public call() {
    this.cService.call();
    console.log('Call: ' + AService.name);
  }
}
