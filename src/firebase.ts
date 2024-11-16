import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
  apiKey: 'AIzaSyDecKH86twaB2xUOUde7bt55vtV0c8MKkM',
  authDomain: 'yunwoo-jihyun-invitation.firebaseapp.com',
  projectId: 'yunwoo-jihyun-invitation',
  storageBucket: 'yunwoo-jihyun-invitation.firebasestorage.app',
  messagingSenderId: '1039487186195',
  appId: '1:1039487186195:web:d1946c85c7f10209bad6e6',
  measurementId: 'G-K0WV488Z6F',
  databaseURL: 'https://yunwoo-jihyun-invitation-default-rtdb.firebaseio.com/',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
