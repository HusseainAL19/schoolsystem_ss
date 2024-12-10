import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { overDataAlltypes } from '../../lib/types/types';

const initialState: null | overDataAlltypes = null;

const dataSlice = createSlice({
  name: 'overAllData',
  initialState,
  reducers: {
    updateData: (state, actions: PayloadAction<{ newData: overDataAlltypes | null }>) => {
      if (actions.payload.newData != null || actions.payload.newData != undefined) {
        return;
      }
      return state = actions.payload.newData;
    }
  }
});

export const { updateData } = dataSlice.actions;
export default dataSlice.reducer;
