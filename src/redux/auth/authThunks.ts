import { HandleLoginParams } from '@declarations/types';

import { authFE } from '@app/firebase/firebaseClient';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { parseUserCredential } from '@utils/parsers';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const handleLogin = createAsyncThunk('auth/login', async ({ email, password }: HandleLoginParams, thunkApi) => {
	try {
		const credential = await signInWithEmailAndPassword(authFE(), email, password);

		// The value we return becomes the `fulfilled` action payload
		return parseUserCredential(credential.user);
	} catch ({ code, message }) {
		console.error(message);
		return thunkApi.rejectWithValue(code);
	}
});
