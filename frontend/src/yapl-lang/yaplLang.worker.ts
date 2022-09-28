import * as worker from 'monaco-editor-core/esm/vs/editor/editor.worker';
import { YAPLWorker } from './YAPLWorker';

self.onmessage = () => {
    worker.initialize((ctx) => {
        return new YAPLWorker(ctx);
    })
}