import { Injectable } from '@nestjs/common';

@Injectable()
export class CService {
  public call() {
    console.log('called: ' + CService.name);
  }
}
