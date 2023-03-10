import { combineReducers } from '@reduxjs/toolkit';
import appReducer from '@/containers/App/appSlice';

export const rootReducer = combineReducers({
  appReducer,
});