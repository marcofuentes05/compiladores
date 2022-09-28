import * as monaco from "monaco-editor-core"

import IWorkerContext = monaco.worker.IWorkerContext;
import YAPLLanguageService from "../language-service/LanguageService";
import { IYAPLError } from "../language-service/YAPLErrorListener";

export class YAPLWorker {
    private _ctx: IWorkerContext;
    private languageService: YAPLLanguageService;
    constructor(ctx: IWorkerContext) {
        this._ctx = ctx;
        this.languageService = new YAPLLanguageService();
    }

    doValidation(): Promise<IYAPLError[]> {
        const code = this.getTextDocument();
        return Promise.resolve(this.languageService.validate(code));
    }

    private getTextDocument(): string {
        const model = this._ctx.getMirrorModels()[0];
        return model.getValue();
    }
}