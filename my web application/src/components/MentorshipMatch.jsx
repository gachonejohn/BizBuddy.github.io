import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import Button from './ui/button';
import Input from './ui/input';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select';



const MentorshipMatching = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('');

  // Mock data for mentors
  const mentors = [
    { id: '1', name: 'Alice Johnson', expertise: ['Marketing', 'Branding'], availability: 'Weekends' },
    { id: '2', name: 'Bob Smith', expertise: ['Finance', 'Venture Capital'], availability: 'Weekdays' },
    { id: '3', name: 'Carol Williams', expertise: ['Technology', 'AI'], availability: 'Flexible' },
  ];

  const filteredMentors = mentors.filter(mentor =>
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedExpertise === '' || mentor.expertise.includes(selectedExpertise))
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Find a Mentor</h1>
      <div className="flex mb-4">
        <Input
          type="text"
          placeholder="Search mentors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-2"
        />
        <Select value={selectedExpertise} onValueChange={setSelectedExpertise}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select expertise" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Expertise</SelectItem>
            <SelectItem value="Marketing">Marketing</SelectItem>
            <SelectItem value="Finance">Finance</SelectItem>
            <SelectItem value="Technology">Technology</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMentors.map(mentor => (
          <Card key={mentor.id}>
            <CardHeader>
              <h2 className="text-xl font-semibold">{mentor.name}</h2>
            </CardHeader>
            <CardContent>
              <p><strong>Expertise:</strong> {mentor.expertise.join(', ')}</p>
              <p><strong>Availability:</strong> {mentor.availability}</p>
              <Button className="mt-2">Request Mentorship</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MentorshipMatching;
