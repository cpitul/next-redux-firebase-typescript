import { User as ReturnUser } from '@utils/declarations/types';
import { User } from 'firebase/auth';

export const parseUserCredential = (user: User): Partial<ReturnUser> => ({
	uid: user.uid,
	email: user.email ?? '',
	emailVerified: user.emailVerified,
});
