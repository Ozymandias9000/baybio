import firebase from "firebase/app";
import database from "firebase/database";
import auth from "firebase/auth";

import { FirebaseConfig } from "./keys.js";
firebase.initializeApp(FirebaseConfig);

export { firebase, database, auth };
