import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import Button from './ui/button';
import Input from './ui/input';
import Select from './ui/select';

import resourceData from './resourceData.json'

const ResourceLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Load resources from JSON data
    setResources(resourceData.resources);
  }, []);

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || resource.category === selectedCategory)
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Resource Library</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-2"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-48"
        >
          <option value="">All Categories</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="Product Development">Product Development</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResources.map(resource => (
          <Card key={resource.id} className="transition transform hover:scale-105 hover:shadow-lg bg-white rounded-lg overflow-hidden">
            <CardHeader>
              <h2 className="text-xl font-semibold">{resource.title}</h2>
              <p className="text-sm text-gray-500">{resource.category} • {resource.type}</p>
            </CardHeader>
            <CardContent>
              <p>{resource.description}</p>
              <Button className="mt-2" onClick={() => window.open(resource.url, '_blank')}>
                {resource.type === 'video' ? 'Watch Video' : 'Download eBook'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResourceLibrary;