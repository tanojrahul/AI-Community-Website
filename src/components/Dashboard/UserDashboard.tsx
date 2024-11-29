import { useState } from 'react';
import { Tabs } from './Tabs';
import { MyBlogs } from './MyBlogs';
import { LikedBlogs } from './LikedBlogs';

export const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('my-blogs');

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
        
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="mt-8">
          {activeTab === 'my-blogs' ? <MyBlogs /> : <LikedBlogs />}
        </div>
      </div>
    </div>
  );
};