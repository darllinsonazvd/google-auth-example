import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCWGU4RISyYO6hDycaIWCW2o_SbHAVa5y8',
  authDomain: 'auth-example-4e024.firebaseapp.com',
  projectId: 'auth-example-4e024',
  storageBucket: 'auth-example-4e024.appspot.com',
  messagingSenderId: '937924805439',
  appId: '1:937924805439:web:7b1db033da65c3445e098a'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
