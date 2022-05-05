import { Module } from '@nestjs/common';
import { TasksController } from '../tasks/tasks.controller';
import { TasksService } from '../tasks/tasks.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
