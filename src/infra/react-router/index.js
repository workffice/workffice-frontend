import { connectRouter } from 'connected-react-router';
import { History } from 'history';

export * from './getHistory';
export * from './updateHistory';

export const configRouter = history => connectRouter(history);
