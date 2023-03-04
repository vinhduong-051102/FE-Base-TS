import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./rootSaga";
import { rootReducer } from "./rootReducer";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

