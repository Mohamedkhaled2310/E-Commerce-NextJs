import React from 'react';
import AdminSidebar from './AdminSidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutAdmin: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex lg:flex-col w-16 lg:w-64 bg-blue-500 text-white p-4 transition-all duration-300 pt-6">
      <AdminSidebar />
      </div>
      <div className="flex-1 p-8 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default LayoutAdmin;