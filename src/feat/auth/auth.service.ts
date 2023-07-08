import * as FirebaseAuth from "firebase/auth";
import app from "../../conf/firebase";

const auth = FirebaseAuth.getAuth(app);

export function signUp(email: string, password: string): Promise<FirebaseAuth.User | undefined> {
  return FirebaseAuth.createUserWithEmailAndPassword(auth, email, password)
      .then(creds => creds.user);
}

export function signIn(email: string, password: string): Promise<FirebaseAuth.User | undefined> {
  return FirebaseAuth.signInWithEmailAndPassword(auth, email, password)
      .then(creds => creds.user);
}

export function signOut(): Promise<void> {
  return FirebaseAuth.signOut(auth);
}
