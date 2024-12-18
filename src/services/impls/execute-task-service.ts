import { ExecuteTaskService } from "../execute-task-service"
import { inject, injectable } from "inversify"
import { ExecuteTaskModel, FinishTaskParams, StartTaskParams } from "@/models/execute-task-model"

@injectable()
export class ExecuteTaskServiceImpl implements ExecuteTaskService {
    constructor(
        @inject(ExecuteTaskModel)
        private _executeTaskModel: ExecuteTaskModel
    ) { }
    startTask(params: StartTaskParams) {
        return this._executeTaskModel.startExecuteTask(params)
    }
    finishTask(id: string, params: FinishTaskParams) {
        return this._executeTaskModel.finishExecuteTask(id, params)
    }
    readTask(id: string) {
        return this._executeTaskModel.readExecuteTask(id)
    }
    getLatestExecuteTaskByRssId(rssId: string) {
        return this._executeTaskModel.getLatestExecuteTaskByRssId(rssId)
    }
}
