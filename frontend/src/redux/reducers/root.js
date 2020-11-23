import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import userReducer from './userReducer';
import transactionReducer from './transactionReducer';
import monthlyReportReducer from './chartReducer';
export const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'auth'],
};

const root = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  user: combineReducers({
    //info: userReducer,

    transaction: transactionReducer,
    monthlyReport: monthlyReportReducer,
  }),
  error: {},
});

export default root;
