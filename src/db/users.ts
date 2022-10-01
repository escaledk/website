import { db } from '../config/firebase/admin';

const usersCollection = db.collection('users');

export const getAllUsers = async () => {
  const result = await usersCollection.get();
};
