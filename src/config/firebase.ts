import * as admin from 'firebase-admin';
import * as firebase from 'firebase/app';
import { cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth as getAdminAuth } from 'firebase-admin/auth';
import { getAuth as getAppAuth } from 'firebase/auth';

const appConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
export const app = firebase.getApps().length <= 0 ? firebase.initializeApp(appConfig) : firebase.getApps()[0];
export const appAuth = getAppAuth(app);

const adminConfig = {
  credential: cert({
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    projectId: process.env.FIREBASE_PROJECT_ID,
  }),
};
const adminApp = !admin.apps.length ? admin.initializeApp(adminConfig) : admin.app();
export const adminAuth = getAdminAuth(adminApp);
export const db = getFirestore(adminApp);
