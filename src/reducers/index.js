import { combineReducers } from 'redux';

import result from './result';
import status from './status';

const rootReducer = combineReducers({
    result,
    status,
});

export default rootReducer;