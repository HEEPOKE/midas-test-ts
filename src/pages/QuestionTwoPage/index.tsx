import { useContext } from "react";
import { AppContext } from "../../contexts";
import { Button } from "react-bootstrap";
import { CardCommon } from "../../common/CardCommon";
import InputCommon from "../../common/InputCommon";

export default function QuestionTwoPage() {
  const { inputTwoValue, setInputTwoValue, handleClickTwo } =
    useContext(AppContext);

  return (
    <CardCommon
      topic={"Question 2"}
      title={"Find Hand Score"}
      content={
        <>
          <InputCommon
            id={"HandScore"}
            label={"Enter Hand Card"}
            type={"text"}
            value={inputTwoValue}
            setValue={setInputTwoValue}
            placeholder={"Enter Hand Card"}
          />
          <Button
            className="col-2 text-center float-end mt-3"
            variant="primary"
            onClick={handleClickTwo}
          >
            Enter
          </Button>
        </>
      }
    />
  );
}
