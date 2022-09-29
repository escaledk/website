import { Console } from 'console';
import * as admin from 'firebase-admin';
import { cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const config: any = {
  privateKye: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY,
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
};

let adminApp;
if (!admin.apps.length) {
  adminApp = admin.initializeApp({
    credential: cert({
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
  });
} else {
  adminApp = admin.app(); // if already initialized, use that one
}

export const adminAuth = getAuth(adminApp);
