import { EntityRepository, Repository } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { Task } from './Model/task.entity';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {

}
