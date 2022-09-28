import * as monaco from "monaco-editor-core";
import { languageExtensionPoint, languageID } from "./config";
import { YAPLWorker } from "./YAPLWorker";
import { WorkerManager } from "./WorkerManager";
import DiagnosticsAdapter from './DiagnosticsAdapter';
import { richLanguageConfiguration, monarchLanguage } from './YAPLLang';

export function setupLanguage() {
    (window as any).MonacoEnvironment = {
        getWorkerUrl: function (moduleId, label) {
            if (label === languageID) {
                return "./yaplWorker.js"
            }
            return './editor.worker.js';
        }
    }
    monaco.languages.register(languageExtensionPoint);
    monaco.languages.onLanguage(languageID, () => {
        monaco.languages.setMonarchTokensProvider(languageID, monarchLanguage);
        monaco.languages.setLanguageConfiguration(languageID, richLanguageConfiguration);
        const client = new WorkerManager();

        const worker: WorkerAccessor = (...uris: monaco.Uri[]): Promise<YAPLWorker> => {
            return client.getLanguageServiceWorker(...uris);
        };
        //Call the errors provider
        new DiagnosticsAdapter(worker)
    });
}

export type WorkerAccessor = (...uris: monaco.Uri[]) => Promise<YAPLWorker>;