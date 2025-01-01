import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div>
        <h3 className= 'text-white font-semibold text-4xl' >KhaledStore</h3>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link href="/products" className="text-white hover:text-gray-400">
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
