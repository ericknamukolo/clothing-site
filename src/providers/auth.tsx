import {
  signInWithGooglePopup,
  db,
  document,
  setDocument,
  getDocument,
  signInwithGoogle,
  createUserWithEmailAndPassword,
} from './../utils/firebase';
import { UserCredential } from 'firebase/auth';

class Auth {
  async authGoogleUser() {
    try {
      const res: UserCredential = await signInWithGooglePopup();
      Auth.createUserData(res);
    } catch (e) {
      console.log(e);
    }
  }

  static async createUserData(user: UserCredential) {
    const userDoc = document(db, 'users', user.user.uid);
    var snapshot = await getDocument(userDoc);
    if (snapshot.exists()) return;
    await setDocument(userDoc, {
      id: user.user.uid,
      name: user.user.displayName,
      email: user.user.email,
      img: user.user.photoURL,
      date: new Date(),
    });
  }
  async authWithRedirect() {
    try {
      await signInwithGoogle();
    } catch (e) {
      console.log(e);
    }
  }

  async createUserForRedirect(user: UserCredential) {
    const userDoc = document(db, 'users', user.user.uid);
    var snapshot = await getDocument(userDoc);
    if (snapshot.exists()) return;
    await setDocument(userDoc, {
      id: user.user.uid,
      name: user.user.displayName,
      email: user.user.email,
      img: user.user.photoURL,
      date: new Date(),
    });
  }
}

export default Auth;
