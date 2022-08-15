import { initializeApp as initAdminApp, apps, credential, app, firestore, auth, storage } from 'firebase-admin';

import { InitFirebaseServerSideParams } from '@utils/declarations/interfaces';
import { firebaseConfig } from '@utils/misc';

export const initAppBE = ({
	credential: { projectId, privateKey, clientEmail },
	firebaseConfig,
}: InitFirebaseServerSideParams) => {
	initAdminApp({
		credential: credential.cert({
			projectId,
			privateKey,
			clientEmail,
		}),
		...firebaseConfig,
	});
};

// init firebase server side
if (!apps.length) {
	initAppBE({
		credential: {
			projectId: process.env.FIREBASE_PROJECT_ID ?? '',
			privateKey: process.env.FIREBASE_PRIVATE_KEY ?? '',
			clientEmail: process.env.FIREBASE_CLIENT_EMAIL ?? '',
		},
		firebaseConfig,
	});
}

// firebase apps
export const [mainAppBE, clientAppBE] = apps as app.App[];

// firebase server refs
export const firestoreBE = firestore(mainAppBE);
export const authBE = auth(mainAppBE);
export const storageBE = storage(mainAppBE);
