import { createSlice } from '@reduxjs/toolkit';
import alertModalAction, {
  initialState,
  AlertModalState,
} from './alertModalAction';

const alertModalSlice = createSlice({
  name: 'alertModal',
  initialState: initialState,
  reducers: alertModalAction,
});

export const { showAlert, closeAlert } = alertModalSlice.actions;
export const getAlertState = (state: any): AlertModalState => state.alertModal;

export default alertModalSlice.reducer;
