import { createContext, ReactNode, useMemo, useState } from "react";
import SwalCommon from "../common/SwalCommon";
import { testServices } from "../services/TestServices";

interface AppContextProps {
  inputOneValue: number | string;
  setInputOneValue: (inputOneValue: number | string) => void;
  handleClick: () => void;
  inputTwoValue: number | string;
  setInputTwoValue: (inputTwoValue: number | string) => void;
  handleClickTwo: () => void;
  inputThreeValue: number | string;
  setInputThreeValue: (inputThreeValue: number | string) => void;
  handleClickThree: () => void;
}

export const AppContext = createContext<AppContextProps>({
  inputOneValue: 0,
  setInputOneValue: () => {},
  handleClick: () => {},
  inputTwoValue: "",
  setInputTwoValue: () => {},
  handleClickTwo: () => {},
  inputThreeValue: "",
  setInputThreeValue: () => {},
  handleClickThree: () => {},
});

interface ChildrenProps {
  children: ReactNode;
}

export function AppContextProvider({ children }: ChildrenProps) {
  const [inputOneValue, setInputOneValue] = useState<number | string>(0);
  const [inputTwoValue, setInputTwoValue] = useState<number | string>("");
  const [inputThreeValue, setInputThreeValue] = useState<number | string>("");

  const handleClick = () => {
    const digisibleValue = testServices.isDigisible(inputOneValue);

    SwalCommon({
      icon: digisibleValue ? "success" : "error",
      value: digisibleValue ? "TRUE" : "FALSE",
    });
  };

  const handleClickTwo = () => {
    const handScoreValue = testServices.getHandScore(inputTwoValue);

    SwalCommon({
      icon: "success",
      value: handScoreValue.toString(),
    });
  };

  const handleClickThree = () => {
    const clockAngleValue = testServices.clockAngle(inputThreeValue);

    SwalCommon({
      icon: "success",
      value: clockAngleValue.toString(),
    });
  };

  const values = useMemo(
    () => ({
      inputOneValue,
      setInputOneValue,
      handleClick,
      inputTwoValue,
      setInputTwoValue,
      handleClickTwo,
      inputThreeValue,
      setInputThreeValue,
      handleClickThree,
    }),
    [
      inputOneValue,
      setInputOneValue,
      handleClick,
      inputTwoValue,
      setInputTwoValue,
      handleClickTwo,
      inputThreeValue,
      setInputThreeValue,
      handleClickThree,
    ]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
