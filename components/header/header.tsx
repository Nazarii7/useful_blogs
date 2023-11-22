import { Navigation } from "../navigation/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const Header = () => {
  return (
    <header className=" bg-green-600 mt-1 shadow-md rounded-md">
      <div className="flex items-center justify-between p-6 ">
        <Navigation navLinks={navItems} />
      </div>
    </header>
  );
};

export { Header };
