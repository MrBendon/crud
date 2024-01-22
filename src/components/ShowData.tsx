import { DataType } from "./Table";

interface PropType {
  data: DataType;
  Delete: (id: number) => void;
  Edit: (id: number) => void;
}

const ShowData = ({ data, Delete, Edit }: PropType) => {
  function DeleteFn() {
    Delete(data.Id);
  }

  function EditFn() {
    console.log("edit");
    Edit(data.Id);
  }
  return (
    <div className="grid grid-cols-7 gap-1 p-2 bg-blue-100 justify-items-center items-center even:bg-gray-100 text-sm">
      <div className="flex gap-4">
        <button className="bg-blue-400 px-2 py-1 rounded-md cursor-pointer" onClick={EditFn}>
          Edit
        </button>
        <button className="bg-red-300 px-2 py-1 rounded-md cursor-pointer" type="button" onClick={DeleteFn}>
          Delete
        </button>
      </div>
      <p>{data && data.HeroName}</p>
      <p>{data && data.FirstName}</p>
      <p>{data && data.LastName}</p>
      <p>{data && data.City}</p>
      <div className="w-full flex justify-end">{data && data.AnnuaIncome.toLocaleString()}</div>
      <div className="w-full flex justify-end">{data && data.AnnualExpenditure.toLocaleString()}</div>
    </div>
  );
};

export default ShowData;
