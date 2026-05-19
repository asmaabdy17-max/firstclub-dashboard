import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, Users, Zap, Target, Map, AlertCircle, CheckCircle, Clock, DollarSign, Truck } from 'lucide-react';

export default function QuickCommerceDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlatform, setSelectedPlatform] = useState('firstclub');

  // Platform comparison data
  const platformData = {
    firstclub: {
      name: 'FirstClub',
      founded: 'Dec 2024',
      funding: '$31M',
      valuation: '$120M',
      moat: 'Quality + Exclusive Products',
      color: 'from-green-500 to-green-600',
      positioning: 'Premium Quality',
      tagline: 'If It\'s Not Good, It\'s Not Here',
      targetDemographic: 'Top 10% (₹15L+ income)',
      cac: '₹200-500',
      ltv: '₹24,000+',
      ltvCac: '12-15:1',
      deliveryTime: '25-30 min',
      deliveryCost: '₹20-25',
      repeatRate: '60%',
      momentumMoM: '45%',
      exclusiveProducts: '60%',
      clubhouses: 4,
      cities: 1,
      strength: 'Quality, Member Loyalty, Low CAC',
      weakness: 'Pre-scale, single city, execution risk'
    },
    blinkit: {
      name: 'Blinkit',
      founded: '2012',
      funding: '$500M+',
      valuation: '$1B+',
      moat: 'Speed + Scale',
      color: 'from-yellow-500 to-yellow-600',
      positioning: 'Fastest Delivery',
      tagline: '10-Minute Delivery',
      targetDemographic: 'Mass market (all income levels)',
      cac: '₹800-1000',
      ltv: '₹8,000-12,000',
      ltvCac: '8-12:1',
      deliveryTime: '10-12 min',
      deliveryCost: '₹40-50',
      repeatRate: '35-40%',
      momentumMoM: '15-20%',
      exclusiveProducts: '5-10%',
      stores: '500+',
      cities: '50+',
      strength: 'Speed, Scale, Capital',
      weakness: 'Quality concerns, low loyalty, expensive CAC'
    },
    swiggy: {
      name: 'Swiggy Instamart',
      founded: '2018 (Instamart)',
      funding: 'Part of $5B+ Swiggy',
      valuation: 'Embedded in Swiggy',
      moat: 'Food ecosystem leverage',
      color: 'from-orange-500 to-orange-600',
      positioning: 'Convenience + Food',
      tagline: 'Insta-Convenience',
      targetDemographic: 'Swiggy users (broad)',
      cac: '₹600-800',
      ltv: '₹10,000-15,000',
      ltvCac: '10-15:1',
      deliveryTime: '15-20 min',
      deliveryCost: '₹35-45',
      repeatRate: '40-45%',
      momentumMoM: '20-25%',
      exclusiveProducts: '10-15%',
      stores: '300+',
      cities: '40+',
      strength: 'Food ecosystem, customer base, capital',
      weakness: 'Jack-of-all-trades, less focused on grocery'
    },
    bigbasket: {
      name: 'BigBasket',
      founded: '2011',
      funding: '$700M+',
      valuation: '$1B+',
      moat: 'Brand + Selection',
      color: 'from-blue-500 to-blue-600',
      positioning: 'Wide Selection',
      tagline: 'Everything You Need',
      targetDemographic: 'Urban middle class',
      cac: '₹500-700',
      ltv: '₹15,000-18,000',
      ltvCac: '9-11:1',
      deliveryTime: '30-45 min',
      deliveryCost: '₹30-40',
      repeatRate: '50-55%',
      momentumMoM: '10-12%',
      exclusiveProducts: '20-25%',
      stores: '100+',
      cities: '30+',
      strength: 'Selection, brand trust, logistics',
      weakness: 'Slower delivery, higher cost'
    }
  };

  // Unit economics comparison
  const unitEconomicsData = [
    { platform: 'FirstClub', cac: 350, ltv: 24000, ratio: 68.6, margin: 'High' },
    { platform: 'Blinkit', cac: 900, ltv: 10000, ratio: 11.1, margin: 'Medium' },
    { platform: 'Swiggy', cac: 700, ltv: 12500, ratio: 17.9, margin: 'Medium' },
    { platform: 'BigBasket', cac: 600, ltv: 16500, ratio: 27.5, margin: 'Medium-High' }
  ];

  // Radar data
  const radarData = [
    { attribute: 'Quality', firstclub: 90, blinkit: 60, swiggy: 70, bigbasket: 80 },
    { attribute: 'Speed', firstclub: 75, blinkit: 95, swiggy: 85, bigbasket: 60 },
    { attribute: 'Selection', firstclub: 70, blinkit: 85, swiggy: 75, bigbasket: 95 },
    { attribute: 'Cost', firstclub: 85, blinkit: 90, swiggy: 80, bigbasket: 70 },
    { attribute: 'Loyalty', firstclub: 95, blinkit: 50, swiggy: 60, bigbasket: 75 },
    { attribute: 'Scale', firstclub: 30, blinkit: 95, swiggy: 85, bigbasket: 80 }
  ];

  // Roadmap data
  const roadmapData = [
    { phase: 'Phase 1', timeline: 'Apr-Jun 2026', clubhouses: '4 → 10', focus: 'Foundation', capex: '₹2.5 Cr', opex: '₹3.1 Cr', keyMilestones: ['QC Lab Setup', 'WMS Implementation', 'Vendor Systematization', 'Hub Logistics'] },
    { phase: 'Phase 2', timeline: 'Jul-Dec 2026', clubhouses: '10 → 35', focus: 'Scale', capex: '₹3 Cr', opex: '₹7.3 Cr', keyMilestones: ['Multi-hub Expansion', 'Vendor Network (100+)', 'Demand Forecasting', '45% MoM Growth'] },
    { phase: 'Phase 3', timeline: 'Jan-Dec 2027', clubhouses: '35 → 80-100+', focus: 'Multi-City', capex: '₹7 Cr', opex: '₹18 Cr', keyMilestones: ['Delhi/Mumbai/Hyderabad', 'Regional Labs', 'Regional Vendors', 'Supply Chain Org'] }
  ];

  // Growth trajectory
  const growthData = [
    { month: 'Month 1', firstclub: 100, blinkit_at_scale: 120, swiggy_at_scale: 110 },
    { month: 'Month 2', firstclub: 145, blinkit_at_scale: 135, swiggy_at_scale: 125 },
    { month: 'Month 3', firstclub: 210, blinkit_at_scale: 152, swiggy_at_scale: 142 },
    { month: 'Month 4', firstclub: 305, blinkit_at_scale: 172, swiggy_at_scale: 162 },
    { month: 'Month 5', firstclub: 442, blinkit_at_scale: 195, swiggy_at_scale: 185 },
    { month: 'Month 6', firstclub: 642, blinkit_at_scale: 220, swiggy_at_scale: 210 }
  ];

  const current = platformData[selectedPlatform];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Quick Commerce Landscape
          </h1>
          <p className="text-lg text-slate-300">FirstClub vs Competition + Supply Chain Roadmap</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {[
            { id: 'overview', label: 'Platform Overview' },
            { id: 'comparison', label: 'Unit Economics' },
            { id: 'positioning', label: 'Strategic Positioning' },
            { id: 'growth', label: 'Growth Trajectory' },
            { id: 'roadmap', label: 'FirstClub Roadmap' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div>
            {/* Platform Selector */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {Object.entries(platformData).map(([key, platform]) => (
                <button
                  key={key}
                  onClick={() => setSelectedPlatform(key)}
                  className={`p-4 rounded-lg transition-all border-2 ${
                    selectedPlatform === key
                      ? `bg-gradient-to-br ${platform.color} border-white/50`
                      : 'bg-slate-700 border-slate-600 hover:border-slate-500'
                  }`}
                >
                  <div className="font-bold text-sm md:text-base">{platform.name}</div>
                  <div className="text-xs text-slate-300 mt-1">{platform.positioning}</div>
                </button>
              ))}
            </div>

            {/* Selected Platform Details */}
            <div className={`bg-gradient-to-br ${current.color} rounded-lg p-8 mb-8`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{current.name}</h2>
                  <p className="text-lg mb-4 opacity-90">{current.tagline}</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Positioning:</strong> {current.positioning}</p>
                    <p><strong>Target:</strong> {current.targetDemographic}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm opacity-80">CAC</div>
                    <div className="text-2xl font-bold">{current.cac}</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm opacity-80">LTV</div>
                    <div className="text-2xl font-bold">{current.ltv}</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm opacity-80">LTV:CAC Ratio</div>
                    <div className="text-2xl font-bold">{current.ltvCac}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Clock, label: 'Delivery Time', value: current.deliveryTime },
                { icon: DollarSign, label: 'Delivery Cost', value: current.deliveryCost },
                { icon: Users, label: 'Repeat Rate', value: current.repeatRate },
                { icon: TrendingUp, label: 'MoM Growth', value: current.momentumMoM }
              ].map((metric, idx) => (
                <div key={idx} className="bg-slate-700 rounded-lg p-6 text-center hover:bg-slate-600 transition-all">
                  <metric.icon className="w-8 h-8 mx-auto mb-3 text-green-400" />
                  <div className="text-sm text-slate-400 mb-2">{metric.label}</div>
                  <div className="text-2xl font-bold">{metric.value}</div>
                </div>
              ))}
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <h3 className="font-bold text-lg">Strengths</h3>
                </div>
                <p className="text-sm">{current.strength}</p>
              </div>
              <div className="bg-red-500/20 border border-red-500 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <h3 className="font-bold text-lg">Challenges</h3>
                </div>
                <p className="text-sm">{current.weakness}</p>
              </div>
            </div>
          </div>
        )}

        {/* ROADMAP TAB */}
        {activeTab === 'roadmap' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">FirstClub Supply Chain Roadmap</h2>
            
            {/* Phase Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {roadmapData.map((phase, idx) => (
                <div key={idx} className={`rounded-lg p-6 border-2 ${
                  idx === 0 ? 'bg-blue-500/20 border-blue-500' :
                  idx === 1 ? 'bg-green-500/20 border-green-500' :
                  'bg-purple-500/20 border-purple-500'
                }`}>
                  <h3 className="text-xl font-bold mb-2">{phase.phase}</h3>
                  <p className="text-sm text-slate-300 mb-4">{phase.timeline}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-xs text-slate-400">Clubhouses</div>
                      <div className="font-bold text-lg">{phase.clubhouses}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Focus</div>
                      <div className="font-bold">{phase.focus}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <div className="text-xs text-slate-400">Capex</div>
                        <div className="font-bold text-sm">{phase.capex}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Opex</div>
                        <div className="font-bold text-sm">{phase.opex}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="text-xs text-slate-400 mb-2">Key Milestones</div>
                    <div className="space-y-1">
                      {phase.keyMilestones.map((milestone, midx) => (
                        <div key={midx} className="text-xs">✓ {milestone}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-700 rounded-lg p-6">
              <h3 className="font-bold mb-4">Critical Success Factors (2026)</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Spoilage Rate: &lt;1.5%</li>
                <li>✓ Repeat Rate: Maintain 60%</li>
                <li>✓ Delivery Reliability: &gt;98%</li>
                <li>✓ Vendor Reliability: &gt;95%</li>
                <li>✓ LTV:CAC Ratio: 10-15:1</li>
              </ul>
            </div>
          </div>
        )}

        {/* OTHER TABS - Simplified for brevity */}
        {activeTab === 'comparison' && (
          <div className="bg-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Unit Economics Comparison</h2>
            <table className="w-full text-sm">
              <thead className="bg-slate-800">
                <tr>
                  <th className="px-6 py-3 text-left">Metric</th>
                  <th className="px-6 py-3 text-center">FirstClub</th>
                  <th className="px-6 py-3 text-center">Blinkit</th>
                  <th className="px-6 py-3 text-center">Swiggy</th>
                  <th className="px-6 py-3 text-center">BigBasket</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-600">
                  <td className="px-6 py-3">CAC</td>
                  <td className="px-6 py-3 text-center text-green-400">₹200-500 ⭐</td>
                  <td className="px-6 py-3 text-center">₹800-1000</td>
                  <td className="px-6 py-3 text-center">₹600-800</td>
                  <td className="px-6 py-3 text-center">₹500-700</td>
                </tr>
                <tr className="border-t border-slate-600">
                  <td className="px-6 py-3">LTV:CAC Ratio</td>
                  <td className="px-6 py-3 text-center text-green-400">12-15:1 ⭐</td>
                  <td className="px-6 py-3 text-center">8-12:1</td>
                  <td className="px-6 py-3 text-center">10-15:1</td>
                  <td className="px-6 py-3 text-center">9-11:1</td>
                </tr>
                <tr className="border-t border-slate-600">
                  <td className="px-6 py-3">Repeat Rate</td>
                  <td className="px-6 py-3 text-center text-green-400">60% ⭐</td>
                  <td className="px-6 py-3 text-center">35-40%</td>
                  <td className="px-6 py-3 text-center">40-45%</td>
                  <td className="px-6 py-3 text-center">50-55%</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'positioning' && (
          <div className="bg-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Strategic Positioning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div><h3 className="font-bold mb-3">FirstClub's Moat</h3><ul className="text-sm space-y-2"><li>✓ Quality + Taste-Testing</li><li>✓ 60% Exclusive Products</li><li>✓ 60% Repeat Rate (Member Loyalty)</li><li>✓ Low CAC Model</li></ul></div>
              <div><h3 className="font-bold mb-3">vs Competitors</h3><ul className="text-sm space-y-2"><li>Blinkit: Speed + Scale</li><li>Swiggy: Food Ecosystem</li><li>BigBasket: Selection + Trust</li></ul></div>
            </div>
          </div>
        )}

        {activeTab === 'growth' && (
          <div className="bg-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Growth Analysis</h2>
            <p className="text-sm mb-4">FirstClub's 45% MoM growth is exceptional because:</p>
            <ul className="space-y-2 text-sm">
              <li>✓ Low CAC (₹200-500 vs competitors ₹600-1000)</li>
              <li>✓ High repeat rate (60% = word-of-mouth flywheel)</li>
              <li>✓ Quality-first positioning (sustainable moat)</li>
              <li>✓ Organic acquisition (not paid ads)</li>
            </ul>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-slate-400 border-t border-slate-700 pt-8">
          <p>Live Interactive Dashboard | Based on Public Data + Analysis | May 2026</p>
        </div>
      </div>
    </div>
  );
}