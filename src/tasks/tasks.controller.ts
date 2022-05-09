import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Task } from './Model/task.entity';
import { TasksService } from './tasks.service';
import { CreateTaskRequest } from './Model/CreateTaskRequest';

@ApiTags('Task')
@Controller('tasks')
export class TasksController {
  private logger = new Logger('TasksController');

  constructor(private tasksService: TasksService) {}

  @Get('get-all-tasks')
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get('get-task-by-id/:id')
  getTaskById(@Param('id') id: string): Task {
    this.logger.verbose(`${id}`);
    return this.tasksService.getTaskById(id);
  }

  @Post('create-task')
  createTask(@Body() createTaskRequest: CreateTaskRequest): Task {
    return this.tasksService.createTask(createTaskRequest);
  }

  @Put('update-task/:id')
  updateTask(
    @Param('id') id: string,
    @Body('description') description: string,
  ): string {
    this.logger.verbose(`${id}`);
    console.log(description);
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
