import {
  signInWithGooglePopup,
  db,
  document,
  setDocument,
  getDocument,
  signInwithGoogle,
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
      const res: UserCredential = await signInwithGoogle();
      Auth.createUserData(res);
    } catch (e) {
      console.log(e);
    }
  }
}

export default Auth;
