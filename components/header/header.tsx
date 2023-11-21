import Link from "next/link";

const Header = () => {
  return (
    <header className=" bg-green-600">
      <div className="mx-auto flex max-w-7x1 items-center justify-between p-6 lg:px-8">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </header>
  );
};

export { Header };
