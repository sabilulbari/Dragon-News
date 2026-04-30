"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children }) => {
  const pathName = usePathname();

  const isActive = href === pathName;

  return (
    <Link className={`${isActive ? "border-b-2 border-b-purple-500 text-red-900" : ""}`} href={href}>
      {children}
    </Link>
  );
};

export default Navlink;
