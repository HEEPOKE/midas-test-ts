import { useContext } from "react";
import { AppContext } from "../../contexts";
import { Button } from "react-bootstrap";
import { CardCommon } from "../../common/CardCommon";
import InputCommon from "../../common/InputCommon";

export default function QuestionThreePage() {
  const { inputThreeValue, setInputThreeValue, handleClickThree } =
    useContext(AppContext);

  return (
    <CardCommon
      topic={"Question 3"}
      title={"Find Clock Angle"}
      content={
        <>
          <InputCommon
            id={"HandScore"}
            label={"Enter Clock Angle"}
            type={"text"}
            value={inputThreeValue}
            setValue={setInputThreeValue}
            placeholder={"Enter Clock Angle"}
          />
          <Button
            className="col-2 text-center float-end mt-3"
            variant="primary"
            onClick={handleClickThree}
          >
            Enter
          </Button>
        </>
      }
    />
  );
}
