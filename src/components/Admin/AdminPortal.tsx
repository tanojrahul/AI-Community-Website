import { useState } from 'react';
import { AdminDashboard } from './AdminDashboard';
import { ManageUsers } from './ManageUsers';
import { ManageBlogs } from './ManageBlogs';
import { AdminNav } from './AdminNav';

export const AdminPortal = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-900">
      <AdminNav activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {activeSection === 'dashboard' && <AdminDashboard />}
          {activeSection === 'users' && <ManageUsers />}
          {activeSection === 'blogs' && <ManageBlogs />}
        </div>
      </main>
    </div>
  );
};