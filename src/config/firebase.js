import firebase from "@firebase/app";
import "@firebase/database";
import "@firebase/auth";

import { FirebaseConfig } from "./keys.js";
firebase.initializeApp(FirebaseConfig);

export { firebase };
