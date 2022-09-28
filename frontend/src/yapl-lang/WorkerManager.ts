
import * as monaco from "monaco-editor-core";

import Uri = monaco.Uri;
import { YAPLWorker } from './YAPLWorker';
import { languageID } from './config';

export class WorkerManager {

	private worker: monaco.editor.MonacoWebWorker<YAPLWorker>;
	private workerClientProxy: Promise<YAPLWorker>;

	constructor() {
		this.worker = null;
	}

	private getClientproxy(): Promise<YAPLWorker> {

		if (!this.workerClientProxy) {
			this.worker = monaco.editor.createWebWorker<YAPLWorker>({
				// module that exports the create() method and returns a `JSONWorker` instance
				moduleId: 'yaplWorker',
				label: languageID,
				// passed in to the create() method
				createData: {
					languageId: languageID,
				}
			});

			this.workerClientProxy = <Promise<YAPLWorker>><any>this.worker.getProxy();
		}

		return this.workerClientProxy;
	}

	async getLanguageServiceWorker(...resources: Uri[]): Promise<YAPLWorker> {
		const _client: YAPLWorker = await this.getClientproxy();
		await this.worker.withSyncedResources(resources)
		return _client;
	}
}