import {
  signInWithGooglePopup,
  db,
  document,
  setDocument,
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
    console.log(userDoc);
    await setDocument(userDoc, {
      id: user.user.uid,
      name: user.user.displayName,
      email: user.user.email,
      img: user.user.photoURL,
      date: Date.now(),
    });
  }
}

export default Auth;
