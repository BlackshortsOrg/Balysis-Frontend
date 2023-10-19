import Image from "next/image";
import BalysisNavbarLogo from "../../public/balysis_logo_navbar.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-[10vh] shadow-lg backdrop-blur-lg flex justify-between items-center pl-4">
      <Image
        src={BalysisNavbarLogo}
        className="h-[10vh] w-auto"
        alt="Balysis Logo"
      />
      <div className="flex flex-row">
        <Link href={"/home"} className="px-8 font-bold">
          Home
        </Link>
        <Link href={"/products"} className="px-8 font-bold">
          Products
        </Link>
        <Link href={"/marketplace"} className="px-8 font-bold">
          Marketplace
        </Link>
        <Link href={"/learn"} className="px-8 font-bold">
          Learn
        </Link>
        <Link href={"/pricing"} className="px-8 font-bold">
          Pricing
        </Link>
        <Link href={"/usage"} className="px-8 font-bold">
          How To Use
        </Link>
      </div>
      <div className="">
        <button className="px-16 border-[1px] border-black rounded-3xl py-2 font-bold mr-6">
          Login
        </button>
        <button className="px-16 border-[1px] text-white rounded-3xl py-2 font-bold bg-[#41AFFF] mr-2">
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
