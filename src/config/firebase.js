import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAczVmNhlAyhqmr9kAoVg99cnj-DaHwygM",
    authDomain: "andy-firebase-c65f7.firebaseapp.com",
    projectId: "andy-firebase-c65f7",
    storageBucket: "andy-firebase-c65f7.appspot.com",
    messagingSenderId: "262829679976",
    appId: "1:262829679976:web:7e47cd0617a311a0e5a2dd"
};
firebase.initializeApp(config);
export default firebase;
const db = firebase.firestore();
export {db};