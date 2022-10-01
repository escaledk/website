import * as admin from 'firebase-admin';
import { cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const config = {
  credential: cert({
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    projectId: process.env.FIREBASE_PROJECT_ID,
  }),
};

let adminApp;
if (!admin.apps.length) {
  adminApp = admin.initializeApp(config);
} else {
  adminApp = admin.app(); // if already initialized, use that one
}

export const adminAuth = getAuth(adminApp);
