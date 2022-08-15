// INIT SERVER-SIDE
import { InitFirebaseClientSideParams } from '@utils/declarations/interfaces';
import { firebaseConfig } from '@utils/misc';

// INIT CLIENT-SIDE
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const initAppFE = ({ firebaseConfig }: InitFirebaseClientSideParams) => {
	initializeApp(firebaseConfig);
};

// init firebase client side
if (!getApps().length) initAppFE({ firebaseConfig });

// firebase apps
export const [mainAppFE, clientAppFE] = getApps();

// firebase client refs
export const firestoreFE = getFirestore;
export const authFE = getAuth;
export const storageFE = getStorage;
