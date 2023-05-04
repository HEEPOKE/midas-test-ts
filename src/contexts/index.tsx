import { createContext, ReactNode, useMemo, useState } from "react";
import SwalCommon from "../common/SwalCommon";

interface AppContextProps {
  inputOneValue: number | string;
  setInputOneValue: (inputOneValue: number | string) => void;
  handleClick: () => void;
}

export const AppContext = createContext<AppContextProps>({
  inputOneValue: 0,
  setInputOneValue: () => {},
  handleClick: () => {},
});

interface ChildrenProps {
  children: ReactNode;
}

export function AppContextProvider({ children }: ChildrenProps) {
  const [inputOneValue, setInputOneValue] = useState<number | string>(0);

  const isDigisible = (value: any): boolean => {
    const digits = value.toString().split("").map(Number);

    if (new Set(digits).size !== digits.length) {
      return false;
    }

    if (digits.includes(0)) {
      return false;
    }

    for (const digit of digits) {
      if (value % digit !== 0) {
        return false;
      }
    }

    return true;
  };

  const handleClick = () => {
    const digisibleValue = isDigisible(inputOneValue);

    SwalCommon({
      icon: digisibleValue ? "success" : "error",
      value: digisibleValue ? "TRUE" : "FALSE",
    });
  };

  const values = useMemo(
    () => ({
      inputOneValue,
      setInputOneValue,
      handleClick,
    }),
    [inputOneValue, setInputOneValue, handleClick]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
