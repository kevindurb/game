import { combineReducers } from 'redux';
import logs from './logs';
import wood from './wood';
import console from './console';

export default combineReducers({
  logs,
  wood,
  console,
});
