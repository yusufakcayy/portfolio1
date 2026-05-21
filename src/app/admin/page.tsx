import React from 'react';

export default function AdminPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Admin Panel</h1>
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <p className="text-lg mb-4">Welcome to the admin dashboard. Here you can manage site content, view analytics, and configure settings.</p>
        {/* Placeholder sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-700 rounded">
            <h2 className="text-2xl font-semibold mb-2">Analytics</h2>
            <p className="text-gray-300">[Charts and stats will appear here]</p>
          </div>
          <div className="p-4 bg-gray-700 rounded">
            <h2 className="text-2xl font-semibold mb-2">Content Management</h2>
            <p className="text-gray-300">[CRUD UI for projects, posts, etc.]</p>
          </div>
        </div>
      </div>
    </section>
  );
}
