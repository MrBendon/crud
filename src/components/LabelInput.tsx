import { ChangeEvent } from "react";
import { DataType } from "./Table";

interface PropsType {
  newData: DataType;
  labelName: string;
  handleOnChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LabelInput = ({ newData, labelName, handleOnChangeInput }: PropsType) => {
  return (
    <div className="w-full flex justify-between gap-1">
      <label className="flex flex-1 justify-end" htmlFor="">
        {labelName}:
      </label>
      <input
        className="border border-gray-300 rounded-md"
        type="text"
        name={labelName}
        value={newData?.[labelName]}
        onChange={handleOnChangeInput}
      />
    </div>
  );
};

export default LabelInput;
