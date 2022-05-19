import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
firebase.initializeApp(config);
export default firebase;
const db = firebase.firestore();
export {db};
