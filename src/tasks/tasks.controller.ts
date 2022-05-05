import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get('get-all-tasks')
  getAllTasks(): string {
    return `Get all task`;
  }

  @Post('create-tasks')
  createTask(): string {
    return `Create task`;
  }

  @Patch('update-status')
  updateStatus(): string {
    return `Update task`;
  }

  @Delete('/:id')
  deleteTask(): string {
    return `Delete task`;
  }
}
