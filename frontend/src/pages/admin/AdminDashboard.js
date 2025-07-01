import React from 'react';
import { Users, FileText, MessageSquare, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Users', value: '125', icon: Users, color: 'bg-blue-500' },
    { title: 'Content Items', value: '48', icon: FileText, color: 'bg-green-500' },
    { title: 'New Messages', value: '12', icon: MessageSquare, color: 'bg-yellow-500' },
    { title: 'Growth', value: '+15%', icon: TrendingUp, color: 'bg-purple-500' }
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome to your admin dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="card">
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center`}>
                    <Icon size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-2">
        <div className="card">
          <div className="card-header">
            <h3>Recent Activity</h3>
          </div>
          <div className="card-body">
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-gray-50 rounded">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <Users size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">New user registered</p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <FileText size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">New blog post published</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <MessageSquare size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">New contact message</p>
                  <p className="text-xs text-gray-500">3 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Quick Actions</h3>
          </div>
          <div className="card-body">
            <div className="space-y-3">
              <button className="btn btn-primary w-full">Create New Content</button>
              <button className="btn btn-outline w-full">Manage Users</button>
              <button className="btn btn-outline w-full">View Messages</button>
              <button className="btn btn-outline w-full">Upload Files</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;