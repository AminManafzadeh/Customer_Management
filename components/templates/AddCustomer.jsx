import { useState } from "react";
import Form from "../modules/Form";

function AddCustomer() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    postalCode: "",
    date: "",
    products: [],
  });

  const handleCancel = () => {};

  const handleSave = () => {};

  return (
    <div>
      <h4 className="font-bold text-xl">Add New Customer :</h4>
      <Form form={form} setForm={setForm} />
      <div className="flex justify-between mb-[50px]">
        <button
          onClick={handleCancel}
          className="text-redd bg-black border-[3px] border-redd font-bold rounded-[5px] py-[10px] px-[30px] cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="text-greenn bg-black border-[3px] border-greenn font-bold rounded-[5px] py-[10px] px-[30px] cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddCustomer;
