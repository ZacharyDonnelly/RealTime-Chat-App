import React, { createContext } from "react";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

export const UserContext = createContext();

class UserProvider extends React.Component {
  state = {
    user: null
  };

  unsubscribeFromAuth = null;
  unsubscribeFromFirestore = null;

  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const user = await createUserProfileDocument(userAuth);
      this.setState({ user });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
    this.unsubscribeFromFirestore();
  };
  render() {
    const { user } = this.state;
    const { children } = this.props;
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
  }
}
export default UserProvider;
