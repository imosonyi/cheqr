import React, {createContext, useEffect, useState} from "react";
import {getAuth, onAuthStateChanged, User} from "firebase/auth";
import app from "../../conf/firebase";

export const AuthContext = createContext({
  user: {},
  setUser: (user: User | undefined) => {},
  isLoading: false,
  setIsLoading: (isLoading: boolean) => {}
});

const auth = getAuth(app);

// @ts-ignore
export default function AuthProvider({children}) {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(undefined);

  useEffect(() => onAuthStateChanged(auth, (user) => {
    setUser(user ?? undefined);
  }), []);

  // @ts-ignore
  return <AuthContext.Provider value={{user, setUser, isLoading, setIsLoading}}>{children}</AuthContext.Provider>;
};
