import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function CustomerDetailPage({ data }) {
  const router = useRouter();
  console.log(data);

  const handleDelete = async () => {
    const res = await fetch(`/api/delete/${data._id}`, { method: "DELETE" });
    const newRes = await res.json();
    if (newRes.status === "success") {
      router.push("/");
    }
  };

  return (
    <div className="text-white">
      <h4>Customers Details</h4>
      <div className="bg-blackk p-4 rounded-[5px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        <div className="flex rounded-[5px] w-fit my-5">
          <span className="text-bluee mr-[5px]">Name :</span>
          <p>{data?.name}</p>
        </div>
        <div className="flex rounded-[5px] w-fit my-5">
          <span className="text-bluee mr-[5px]">Last Name :</span>
          <p>{data?.lastName}</p>
        </div>
        <div className="flex rounded-[5px] w-fit my-5">
          <span className="text-bluee mr-[5px]">Email :</span>
          <p>{data?.email}</p>
        </div>
        <div className="flex rounded-[5px] w-fit my-5">
          <span className="text-bluee mr-[5px]">Phone :</span>
          <p>{data?.phone}</p>
        </div>
        <div className="flex rounded-[5px] w-fit my-5">
          <span className="text-bluee mr-[5px]">Address :</span>
          <p>{data?.address}</p>
        </div>
        <div className="flex rounded-[5px] w-fit my-5">
          <span className="text-bluee mr-[5px]">PostalCode :</span>
          <p>{data?.postalcode}</p>
        </div>
        <div className="flex rounded-[5px] w-fit my-5">
          <span className="text-bluee mr-[5px]">Date :</span>
          <p>{moment(data.date).utc().format("YYYY-MM-DD")}</p>
        </div>
      </div>
      <div className="bg-blackk mt-[50px] p-4 rounded-[5px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-4">
        <p className="text-white mb-6">Name</p>
        <p className="text-white mb-6">Price</p>
        <p className="text-white mb-6">Qty</p>
        {data?.products.map((product, index) => (
          <React.Fragment key={index}>
            <p className="text-bluee mb-6">{product?.name}</p>
            <p className="text-bluee mb-6">{product?.price}</p>
            <p className="text-bluee mb-6">{product?.qty}</p>
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center justify-between bg-blackk my-[50px] p-4 rounded-[5px]">
        <p>Edit or Delete?</p>
        <button
          className="border border-redd text-redd bg-blackk p-[5px] ml-[15px] rounded-[5px] cursor-pointer w-[100px]"
          onClick={handleDelete}
        >
          Delete
        </button>
        <Link
          className="border border-bluee text-bluee bg-blackk px-[5px] py-[5px] ml-[15px] rounded-[5px]  w-[100px] text-center"
          href={`/edit/${data._id}`}
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default CustomerDetailPage;
