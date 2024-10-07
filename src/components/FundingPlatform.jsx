import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import Button from './ui/button';
import fundingData from './fundingData.json'

const FundingPlatform = () => {
  const [activeTab, setActiveTab] = useState('crowdfunding');
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    // Load the appropriate data based on the active tab
    setOpportunities(fundingData[activeTab]);
  }, [activeTab]);

  return (
    <div id='#fund' className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Funding Opportunities</h1>
      <div className="mb-4">
        <Button
          className={`mr-2 ${activeTab === 'crowdfunding' ? 'bg-blue-600' : 'bg-gray-300 text-gray-800'}`}
          onClick={() => setActiveTab('crowdfunding')}
        >
          Crowdfunding
        </Button>
        <Button
          className={activeTab === 'investorMatching' ? 'bg-blue-600' : 'bg-gray-300 text-gray-800'}
          onClick={() => setActiveTab('investorMatching')}
        >
          Investor Matching
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {opportunities.map(opp => (
          <Card key={opp.id}  className="transition transform hover:scale-105 hover:shadow-lg bg-white rounded-lg overflow-hidden">
            <CardHeader>
              <h2 className="text-xl font-semibold">{opp.name}</h2>
            </CardHeader>
            <CardContent>
              <p>{opp.description}</p>
              <p className="mt-2"><strong>Goal:</strong> ${opp.goal.toLocaleString()}</p>
              <p><strong>Raised:</strong> ${opp.raised.toLocaleString()}</p>
              <progress value={opp.raised} max={opp.goal} className="w-full mt-2" />
              <Button className="mt-2">
                {activeTab === 'crowdfunding' ? 'Support Project' : 'Request Pitch Deck'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FundingPlatform;