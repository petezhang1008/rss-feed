import { TaskService } from "../task-service"
import { inject, injectable } from "inversify"
import { TaskModel, FinishTaskParams, StartTaskParams } from "@/models/task-model"

@injectable()
export class ExecuteTaskServiceImpl implements TaskService {
    constructor(
        @inject(TaskModel)
        private _executeTaskModel: TaskModel
    ) { }
    startTask(params: StartTaskParams) {
        return this._executeTaskModel.startTask(params)
    }
    finishTask(id: string, params: FinishTaskParams) {
        return this._executeTaskModel.finishTask(id, params)
    }
    readTask(id: string) {
        return this._executeTaskModel.readTask(id)
    }
    getLatestTaskByRssId(rssId: string) {
        return this._executeTaskModel.getLatestTaskByRssId(rssId)
    }
    getTaskStatus(id: string) {
        return this._executeTaskModel.getTaskStatus(id)
    }
    getTasksSuccessCountByRssIds(rssIds: string[]) {
        return this._executeTaskModel.getTasksSuccessCountByRssIds(rssIds)
    }
}
