import Link from 'next/link';
import { FaHome, FaBox, FaShoppingCart, FaUsers, FaCog } from 'react-icons/fa';

const AdminSidebar = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 hidden lg:block">Admin Dashboard</h2>
      <ul >
        <li className="mb-4">
          <Link href="/admin" className="flex items-center hover:bg-blue-700 p-2 rounded">
            <FaHome className="mr-2" />
            <span className="hidden lg:block">Dashboard</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/products" className="flex items-center hover:bg-blue-700 p-2 rounded ">
            <FaBox className="mr-2" />
            <span className="hidden lg:block">Products</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/orders" className="flex items-center hover:bg-blue-700 p-2 rounded">
            <FaShoppingCart className="mr-2" />
            <span className="hidden lg:block">Orders</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/customers" className="flex items-center hover:bg-blue-700 p-2 rounded">
            <FaUsers className="mr-2" />
            <span className="hidden lg:block">Customers</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/settings" className="flex items-center hover:bg-blue-700 p-2 rounded">
            <FaCog className="mr-2" />
            <span className="hidden lg:block">Settings</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AdminSidebar;