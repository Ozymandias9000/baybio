import { navigate } from "@reach/router";
import { firebase } from "../../config/firebase";

const signOut = e => {
  e.preventDefault();
  firebase
    .auth()
    .signOut()
    .then(
      function() {
        console.log("Signed Out");
        navigate(`/`);
      },
      function(error) {
        console.error("Sign Out Error", error);
      }
    );
};

export default signOut;
