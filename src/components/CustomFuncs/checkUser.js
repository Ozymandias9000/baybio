import { firebase } from "../../config/firebase";

const checkUser = (user, that) => {
  return !firebase.auth().currentUser ||
    firebase.auth().currentUser.uid !== user.uid
    ? that.setState({ isUser: false })
    : that.setState({ isUser: true });
};

export default checkUser;
