import { Injectable } from '@nestjs/common';
import { Task } from './Model/task.entity';
import { v4 as uuid } from 'uuid';
import { TaskStatus } from './task-status.enum';
import { CreateTaskRequest } from './Model/CreateTaskRequest';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  getTaskById(id: string): Task {
    return this.tasks.find((task) => {
      task.id === id;
    });
  }
  createTask(createTaskRequest: CreateTaskRequest): Task {
    const { title, description } = createTaskRequest;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
  getAllTasks(): Task[] {
    return this.tasks;
  }
}
