import Link from "next/link";
import { useRouter } from "next/router";

function Card({ item }) {
  const router = useRouter();

  const handleDelete = async () => {
    const res = await fetch(`/api/delete/${item._id}`, { method: "DELETE" });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") {
      router.reload();
    }
  };

  return (
    <div className="bg-blackk text-bluee my-5 py-5 px-[10px] rounded-[5px] flex justify-between">
      <div className="flex">
        <p className="mr-[30px]">
          {item.name} {item.lastName}
        </p>
        <p>{item.email}</p>
      </div>

      <div className="">
        <button
          onClick={handleDelete}
          className="border border-redd text-redd bg-blackk rounded-[5px] p-[5px] mr-[15px] font-extralight"
        >
          Delete
        </button>
        <Link
          className="border border-greenn text-greenn bg-blackk rounded-[5px] p-[5px] mr-[15px] font-extralight"
          href={`/edit/${item._id}`}
        >
          Edit
        </Link>
        <Link
          className="border border-greenn text-greenn bg-blackk rounded-[5px] p-[5px]  font-extralight"
          href={`/customer/${item._id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default Card;
