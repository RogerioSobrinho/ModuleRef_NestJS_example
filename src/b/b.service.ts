import { Injectable } from '@nestjs/common';

@Injectable()
export class BService {
  public call() {
    console.log('Call: ' + BService.name);
  }
}
