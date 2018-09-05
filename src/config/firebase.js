import firebase from "firebase/app";
import database from "firebase/database";

import { FirebaseConfig } from "./keys.js";

firebase.initializeApp(FirebaseConfig);

export { firebase, database };
