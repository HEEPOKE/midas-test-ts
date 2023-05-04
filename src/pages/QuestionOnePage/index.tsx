import { useContext } from "react";
import { AppContext } from "../../contexts";
import { Button } from "react-bootstrap";
import { CardCommon } from "../../common/CardCommon";
import InputCommon from "../../common/InputCommon";

export default function QuestionOnePage() {
  const { inputOneValue, setInputOneValue, handleClick } =
    useContext(AppContext);

  return (
    <CardCommon
      topic={"Question 1"}
      title={"Find Digital Number"}
      content={
        <>
          <InputCommon
            id={"digitalNumber"}
            label={"Enter Number"}
            type={"number"}
            min={0}
            value={inputOneValue}
            setValue={setInputOneValue}
            placeholder={"Enter Number"}
          />
          <Button
            className="col-2 text-center float-end mt-3"
            variant="primary"
            onClick={handleClick}
          >
            Enter
          </Button>
        </>
      }
    />
  );
}
