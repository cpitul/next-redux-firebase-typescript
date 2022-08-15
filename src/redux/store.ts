import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import appReducer from '@redux/app/appSlice';
import authReducer from '@redux/auth/authSlice';
import textGeneratorReducer from '@redux/textGenerator/textGeneratorSlice';

const store = configureStore({
	reducer: { app: appReducer, auth: authReducer, textGenerator: textGeneratorReducer },
});
export const getAppState = () => store.getState().app;
export const getAuthState = () => store.getState().auth;
export const getTextGeneratorState = () => store.getState().textGenerator;

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export type RootThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
