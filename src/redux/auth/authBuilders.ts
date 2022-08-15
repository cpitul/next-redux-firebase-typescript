import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { LS, StateStatus } from '@utils/declarations/enums';
import { User } from '@utils/declarations/types';
import { AuthErrorCodes } from 'firebase/auth';
import { AuthState } from './authSlice';
import { handleLogin } from './authThunks';

export const handleLoginBuilder = (builder: ActionReducerMapBuilder<AuthState>) => {
	builder.addCase(handleLogin.pending, state => {
		state.status = StateStatus.loading;
		state.isLogged = false;
		state.user = null;
		state.errors = {};

		localStorage && localStorage.removeItem(LS.IS_LOGGED);
	});
	builder.addCase(handleLogin.fulfilled, (state, action) => {
		state.status = StateStatus.idle;
		state.isLogged = true;
		state.user = action.payload as User;
		state.errors = {};

		console.log('success!');

		localStorage && localStorage.setItem(LS.IS_LOGGED, 'true');
	});
	builder.addCase(handleLogin.rejected, (state, action) => {
		const code = String(action.payload);

		state.status = StateStatus.failed;
		state.isLogged = false;
		state.user = null;

		localStorage && localStorage.removeItem(LS.IS_LOGGED);

		(code === AuthErrorCodes.INVALID_EMAIL || code === AuthErrorCodes.USER_DELETED) &&
			(state.errors = {
				emailErr: true,
				passwordErr: false,
				emailMsg: 'err email - insert error text here (authBuilders)',
			});

		code === AuthErrorCodes.INVALID_PASSWORD &&
			(state.errors = {
				emailErr: false,
				passwordErr: true,
				passwordMsg: 'err pass - insert error text here (authBuilders)',
			});
	});
};
