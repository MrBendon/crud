import { ChangeEvent, useState } from "react";
import ShowData from "./ShowData";
import AddForm from "./AddForm";
import DepositChart from "./DepositChart";

export interface DataType {
  [key: string]: string | number;
  Id: number;
  HeroName: string;
  FirstName: string;
  LastName: string;
  City: string;
  AnnuaIncome: number;
  AnnualExpenditure: number;
}

let dummyData: DataType[] = [
  {
    Id: 1,
    HeroName: "Spider Man",
    FirstName: "Peter",
    LastName: "Parker",
    City: "New York",
    AnnuaIncome: 10000,
    AnnualExpenditure: 500,
  },
  {
    Id: 2,
    HeroName: "Iron Man",
    FirstName: "Tony",
    LastName: "Stark",
    City: "New York",
    AnnuaIncome: 150000,
    AnnualExpenditure: 12000,
  },
  {
    Id: 3,
    HeroName: "Doctor Strange",
    FirstName: "Stephen",
    LastName: "Strange",
    City: "New York",
    AnnuaIncome: 70000,
    AnnualExpenditure: 5000,
  },
  {
    Id: 4,
    HeroName: "Iron Man3",
    FirstName: "Tony",
    LastName: "Stark",
    City: "New York",
    AnnuaIncome: 80000,
    AnnualExpenditure: 50000,
  },
];

const Table = () => {
  const [newData, setNewData] = useState<DataType>({
    Id: 0,
    HeroName: "",
    FirstName: "",
    LastName: "",
    City: "",
    AnnuaIncome: 0,
    AnnualExpenditure: 0,
  });

  const [activeId, setActiveId] = useState(0);
  const [activeData, setActiveData] = useState<null | DataType[]>();

  function selectId(e: ChangeEvent<HTMLSelectElement>) {
    const targetId = Number(e.target.value);
    console.log(targetId);
    setActiveId(targetId);
  }

  function showOneData() {
    const target = dummyData.filter((el) => el.Id === activeId);
    setActiveData(target);
  }

  function showGetAll() {
    setActiveId(0);
    setActiveData(dummyData);
  }

  function handleOnDelete(id: number) {
    setActiveData((prev) => {
      if (prev) {
        return prev.filter((el) => el.Id !== id);
      }
    });
  }

  function handleOnEdit(id: number) {
    const [target] = dummyData.filter((el) => el.Id === id);
    console.log(target);
    setNewData(target);
  }

  function handleOnChangeInput(e: ChangeEvent<HTMLInputElement>) {
    const changeTitle = e.target.name;
    const changeValue = e.target.value;
    console.log(changeValue);
    setNewData((prev) => ({ ...prev, [changeTitle]: changeValue }));
  }

  function handleOnSubmit() {
    console.log(newData);

    const changeTargetIndex = dummyData.findIndex((el) => el.Id === newData.Id);
    console.log(changeTargetIndex);
    if (changeTargetIndex !== -1) {
      dummyData = dummyData.map((el) => {
        if (el.Id === newData.Id) {
          return newData;
        } else {
          return el;
        }
      });
      setActiveData((prev) =>
        prev?.map((el) => {
          if (el.Id === newData.Id) {
            return newData;
          } else {
            return el;
          }
        })
      );
    } else {
      const newDataId = dummyData.length + 1;
      dummyData.push({ ...newData, Id: newDataId });
    }
    setNewData({
      Id: 0,
      HeroName: "",
      FirstName: "",
      LastName: "",
      City: "",
      AnnuaIncome: 0,
      AnnualExpenditure: 0,
    });
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className=" w-full bg-slate-100 flex gap-5">
        <select onChange={selectId}>
          <option value="0">請選擇</option>
          {dummyData.map((el) => (
            <option value={el.Id} key={el.Id}>
              {el.Id} {el.HeroName}{" "}
            </option>
          ))}
        </select>
        <button
          className="p-1 border border-gray-100 rounded-md bg-gray-300 cursor-pointer"
          onClick={showOneData}
        >
          Get One{" "}
        </button>
        <button
          className="p-1 border border-gray-100 rounded-md bg-gray-300 cursor-pointer"
          onClick={showGetAll}
        >
          Get All{" "}
        </button>
      </div>
      <div>
        <div className="grid grid-cols-7 gap-1 py-1 text-white bg-gray-400 font-bold  justify-items-center items-center text-sm">
          <p>action</p>
          <p>HeroName</p>
          <p>FirstName</p>
          <p>LastName</p>
          <p>City</p>
          <p>AnnuaIncome</p>
          <p>AnnualExpenditure</p>
        </div>
        {!activeData && (
          <div className="w-full flex justify-center items-center bg-gray-100 text-gray-500 p-2">
            請選擇您要查看的英雄資料
          </div>
        )}
        {activeData &&
          activeData.map((el) => (
            <ShowData data={el} key={el.Id} Delete={handleOnDelete} Edit={handleOnEdit} />
          ))}
      </div>
      <div className="flex w-full justify-around">
        <AddForm
          newData={newData}
          handleOnChangeInput={handleOnChangeInput}
          handleOnSubmit={handleOnSubmit}
        />
        {activeData && activeData?.length > 0 && <DepositChart activeData={activeData} />}
      </div>
    </div>
  );
};

export default Table;
