import Link from "next/link";

function Layout({ children }) {
  return (
    <div className="mx-auto">
      <header className="flex items-center justify-between mt-5 mb-10 mx-0 text-white">
        <h2 className="font-bold text-white text-2xl">
          Customer Management Project
        </h2>
        <Link
          className="border border-greenn bg-greenn text-blackk py-[5px] px-[10px] rounded-[5px] font-bold"
          href="/add-customer"
        >
          Add Customer
        </Link>
      </header>
      <div className="min-h-[555px]">{children}</div>
      <footer className="bg-blackk text-center text-white py-5 px-[10px] rounded-[10px]">
        <a className="text-blue" href="#" target="_blank" rel="noreferrer">
          Next.js Customer Management Project | &copy;
        </a>
      </footer>
    </div>
  );
}

export default Layout;
