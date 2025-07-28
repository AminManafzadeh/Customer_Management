import { useState } from "react";
import Form from "../modules/Form";
import { useRouter } from "next/router";
import moment from "moment";

function CustomerEditPage({ data, id }) {
  const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "";

  const router = useRouter();
  const [form, setForm] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "",
    address: data.address || "",
    postalCode: data.postalCode || "",
    products: data.products || "",
    date: date,
  });
  console.log(data, id);

  const handleEdit = async () => {
    const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    if (data.status === "success") {
      router.push("/");
    } else {
      console.error("Update failed:", data.message);
    }
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className="">
      <h4>Edit Customer</h4>

      <Form form={form} setForm={setForm} />

      <div className="flex justify-between mb-[50px]">
        <button
          onClick={handleCancel}
          className="text-redd bg-black border-[3px] border-redd font-bold rounded-[5px] py-[10px] px-[30px] cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={handleEdit}
          className="text-greenn bg-black border-[3px] border-greenn font-bold rounded-[5px] py-[10px] px-[30px] cursor-pointer"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default CustomerEditPage;
