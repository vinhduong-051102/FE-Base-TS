import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { appPayloadType } from '@/containers/App/actions';

export interface initialStateType extends appPayloadType {}

const initialState: initialStateType = {
  message: '',
  status: 'info',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    resetRedux: (state) => {
      state.message = '';
      state.status = 'info';
    },
    getMessage: (state, action: PayloadAction<appPayloadType>) => {
      const { message, status } = action.payload;
      state.message = message;
      state.status = status;
    },
  },
});

export const selectMessageAndStatus = (state: RootState) => state.appReducer;
export default appSlice.reducer;
