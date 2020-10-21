import { Test, TestingModule } from '@nestjs/testing';
import { AModule } from './a/a.module';
import { AService } from './a/a.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BModule } from './b/b.module';
import { CModule } from './c/c.module';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;
  let aService: AService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AModule, BModule, CModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
    appService.onModuleInit();
    aService = app.get<AService>(AService);
    aService.onModuleInit();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
