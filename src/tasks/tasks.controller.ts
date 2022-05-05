import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Param,
  Logger,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';

@ApiTags('Task')
@Controller('tasks')
export class TasksController {
  private logger = new Logger('TasksController');

  constructor(private tasksService: TasksService) {}

  @Get('get-all-tasks')
  getAllTasks(): string {
    return `Get all task`;
  }

  @Get('get-task-by-id/:id')
  getTaskById(@Param('id') id: string): string {
    this.logger.verbose(`${id}`);
    return `Get task by id`;
  }

  @Post('create-tasks')
  createTask(): string {
    return `Create task`;
  }

  @Put('update-task/:id')
  updateTask(@Param('id') id: string): string {
    this.logger.verbose(`${id}`);
    return `Update task`;
  }

  @Patch('update-status/:id')
  updateStatus(@Param('id') id: string): string {
    this.logger.verbose(`${id}`);
    return `Update status`;
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): string {
    this.logger.verbose(`${id}`);
    return `Delete task`;
  }
}
