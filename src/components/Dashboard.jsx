import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true); // Melacak state sidebar

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      {/* Konten Utama */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } flex-1 flex flex-col`}
      >
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <h1 className="text-xl font-bold text-gray-700">Dashboard</h1>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">
            Selamat Datang di Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2 text-gray-700">Total Users</h3>
              <p className="text-3xl font-semibold text-blue-500">1,245</p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-4 bg-white shadow-md text-center">
          <p className="text-gray-600">© 2024 Your Company. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
