import { createAction } from '@reduxjs/toolkit';
import * as constants from './constants';
export interface appPayloadType {
  message: string;
  status: 'success' | 'info' | 'warning' | 'error';
}
export const getMessage = createAction<appPayloadType>(
  constants.GET_MESSAGE_ACTION,
);

export const resetRedux = createAction(constants.RESET_REDUX_ACTION);
