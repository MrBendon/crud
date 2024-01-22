import { ChangeEvent } from "react";
import { DataType } from "./Table";
import LabelInput from "./LabelInput";

interface PropsType {
  newData: DataType;
  handleOnChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: () => void;
}

const LabelArray = ["HeroName", "FirstName", "LastName", "City", "AnnuaIncome", "AnnualExpenditure"];

const AddForm = ({ newData, handleOnChangeInput, handleOnSubmit }: PropsType) => {
  return (
    <div className="w-max border border-1 border-gray-400 flex flex-col gap-4 rounded-md p-4">
      <p className="flex justify-center">新增/修改表單：</p>
      {LabelArray.map((el) => (
        <LabelInput handleOnChangeInput={handleOnChangeInput} newData={newData} labelName={el} key={el} />
      ))}
      <button
        className="border border-gray-400 w-max mx-auto px-4 rounded-lg bg-slate-100 cursor-pointer"
        type="button"
        onClick={handleOnSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default AddForm;
