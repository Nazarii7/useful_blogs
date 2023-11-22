"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={`text-base font-semibold ${
              isActive ? "text-xl border-b-green-950" : " text-lime-200"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

export { Navigation };
