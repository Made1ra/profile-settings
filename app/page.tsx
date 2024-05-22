'use client';

import { useState } from 'react';
import MyAccount from './components/my-account';
import Team from './components/team';

export default function ProfileSettings() {
  const [activeTab, setActiveTab] = useState<'My account' | 'Team'>('Team');

  return (
    <div className="flex min-h-screen flex-col items-center p-8">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold mb-4">Settings</h1>
        <div className="bg-white shadow rounded-lg">
          <div className="border-b p-4">
            <button
              onClick={() => setActiveTab('My account')}
              className={`mr-4 text-lg ${activeTab === 'My account' && 'border-b-2 border-blue-400'}`}
            >
              My account
            </button>
            <button
              onClick={() => setActiveTab('Team')}
              className={`text-lg ${activeTab === 'Team' && 'border-b-2 border-blue-400'}`}
            >
              Team
            </button>
          </div>
          <div className="p-4">
            {activeTab === 'My account' && <MyAccount />}
            {activeTab === 'Team' && <Team />}
          </div>
        </div>
      </div>
    </div>
  );
}
