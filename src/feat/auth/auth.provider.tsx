import React, {createContext, ReactNode, useEffect, useState} from "react";
import {getAuth, onAuthStateChanged, User} from "firebase/auth";
import app from "../../conf/firebase";

interface AuthContextProps {
  user: User | undefined,
  setUser: (user: User | undefined) => void,
  isLoading: boolean,
  setIsLoading: (isLoading: boolean) => void
}

export const AuthContext = createContext({} as AuthContextProps);

const auth = getAuth(app);

const AuthProvider: (props: { children: ReactNode }) => JSX.Element = ({children}) => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => onAuthStateChanged(auth, (user) => setUser(user ?? undefined)), []);

  return <AuthContext.Provider value={{user, setUser, isLoading, setIsLoading}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
