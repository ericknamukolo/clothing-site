import { Logger } from 'sass';
import {
  signInWithGooglePopup,
  db,
  document,
  setDocument,
  getDocument,
  signInwithGoogle,
  createUser,
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

  async createUserForRedirect(
    user: UserCredential,
    displayName: string | null = null
  ) {
    const userDoc = document(db, 'users', user.user.uid);
    var snapshot = await getDocument(userDoc);
    if (snapshot.exists()) return;
    await setDocument(userDoc, {
      id: user.user.uid,
      name: displayName ?? user.user.displayName,
      email: user.user.email,
      img: user.user.photoURL,
      date: new Date(),
    });
  }

  async createUserWithEmailAndPwd(
    email: string,
    password: string,
    displayName: string
  ) {
    try {
      if (email === '' || password === '' || displayName === '') {
        throw Error('All fields are required');
      }
      console.log('feifbeibf');
      const response: UserCredential = await createUser(email, password);
      console.log(response);
      await new Auth().createUserForRedirect(response, displayName);
    } catch (e) {
      alert(e);
    }
  }
}

export default Auth;
