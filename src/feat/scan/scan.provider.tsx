import React, {createContext, ReactNode, useState} from "react";

interface ScanContextProps {
  isRequesting: boolean,
  setIsRequesting: (value: boolean) => void,
  hasPermission: boolean | undefined,
  setHasPermission: (value: boolean | undefined) => void,
  value: string | undefined,
  setValue: (value: string | undefined) => void
}

export const ScanContext = createContext({} as ScanContextProps);

const ScanContextProvider: (props: { children: ReactNode }) => JSX.Element = ({children}) => {
  const [isRequesting, setIsRequesting] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean | undefined>(undefined);
  const [value, setValue] = useState<string | undefined>(undefined);

  return (<ScanContext.Provider value={{
    isRequesting, setIsRequesting, hasPermission, setHasPermission, value, setValue
  }}>
    {children}
  </ScanContext.Provider>);
};

export default ScanContextProvider;
