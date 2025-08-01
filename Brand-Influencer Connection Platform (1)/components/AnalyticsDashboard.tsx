import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown,
  Users, 
  DollarSign,
  Eye,
  Heart,
  MessageCircle,
  Share,
  Download,
  Calendar,
  Target,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  BarChart3
} from 'lucide-react';

interface AnalyticsDashboardProps {
  userType: 'brand' | 'influencer' | null;
  onNavigate: (page: string) => void;
}

export function AnalyticsDashboard({ userType, onNavigate }: AnalyticsDashboardProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('reach');

  // Mock data for charts
  const performanceData = [
    { name: 'Jan', reach: 120000, engagement: 4500, clicks: 890, conversions: 45 },
    { name: 'Feb', reach: 145000, engagement: 5200, clicks: 1020, conversions: 62 },
    { name: 'Mar', reach: 180000, engagement: 6800, clicks: 1340, conversions: 89 },
    { name: 'Apr', reach: 165000, engagement: 6200, clicks: 1180, conversions: 74 },
    { name: 'May', reach: 220000, engagement: 8500, clicks: 1650, conversions: 118 },
    { name: 'Jun', reach: 195000, engagement: 7800, clicks: 1420, conversions: 95 },
    { name: 'Jul', reach: 240000, engagement: 9200, clicks: 1890, conversions: 142 }
  ];

  const audienceData = [
    { name: '18-24', value: 35, color: '#6366f1' },
    { name: '25-34', value: 28, color: '#10b981' },
    { name: '35-44', value: 22, color: '#f59e0b' },
    { name: '45-54', value: 12, color: '#ef4444' },
    { name: '55+', value: 3, color: '#8b5cf6' }
  ];

  const platformData = [
    { platform: 'Instagram', posts: 24, reach: 180000, engagement: 4.2 },
    { platform: 'TikTok', posts: 18, reach: 145000, engagement: 6.8 },
    { platform: 'YouTube', posts: 8, reach: 95000, engagement: 8.1 },
    { platform: 'Twitter', posts: 32, reach: 67000, engagement: 2.9 }
  ];

  const campaignData = [
    { name: 'Summer Collection', budget: 25000, spent: 18500, roi: 285, status: 'active' },
    { name: 'Tech Reviews', budget: 15000, spent: 12800, roi: 310, status: 'active' },
    { name: 'Holiday Special', budget: 20000, spent: 19200, roi: 420, status: 'completed' },
    { name: 'Back to School', budget: 12000, spent: 8900, roi: 195, status: 'active' }
  ];

  const isInfluencer = userType === 'influencer';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass border-b border-border/20 sticky top-0 z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onNavigate('dashboard')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center shadow-soft">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Analytics Dashboard</h1>
                <p className="text-sm text-muted-foreground">Performance insights and metrics</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-7xl mx-auto">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-soft border-0 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Reach</p>
                  <p className="text-2xl font-semibold">2.4M</p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +15.3% vs last period
                  </p>
                </div>
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-soft">
                  <Eye className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft border-0 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Engagement Rate</p>
                  <p className="text-2xl font-semibold">5.8%</p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +0.7% vs last period
                  </p>
                </div>
                <div className="w-12 h-12 gradient-success rounded-xl flex items-center justify-center shadow-soft">
                  <Heart className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft border-0 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {isInfluencer ? 'Earnings' : 'Ad Spend'}
                  </p>
                  <p className="text-2xl font-semibold">
                    {isInfluencer ? '$12.4K' : '$58.7K'}
                  </p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +22.1% vs last period
                  </p>
                </div>
                <div className="w-12 h-12 bg-warning rounded-xl flex items-center justify-center shadow-soft">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft border-0 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {isInfluencer ? 'Followers Growth' : 'ROI'}
                  </p>
                  <p className="text-2xl font-semibold">
                    {isInfluencer ? '+8.2K' : '285%'}
                  </p>
                  <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                    <ArrowDownRight className="w-3 h-3" />
                    -2.1% vs last period
                  </p>
                </div>
                <div className="w-12 h-12 bg-destructive rounded-xl flex items-center justify-center shadow-soft">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="performance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          </TabsList>

          {/* Performance Tab */}
          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 shadow-soft border-0 bg-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                  <CardTitle className="text-lg">Performance Trends</CardTitle>
                  <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="reach">Reach</SelectItem>
                      <SelectItem value="engagement">Engagement</SelectItem>
                      <SelectItem value="clicks">Clicks</SelectItem>
                      <SelectItem value="conversions">Conversions</SelectItem>
                    </SelectContent>
                  </Select>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={performanceData}>
                      <defs>
                        <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="name" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e2e8f0',
                          borderRadius: '8px',
                          boxShadow: '0 4px 16px rgba(99, 102, 241, 0.12)'
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey={selectedMetric} 
                        stroke="#6366f1" 
                        fillOpacity={1} 
                        fill="url(#colorReach)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg">Top Performing Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Summer Vibes Post</p>
                      <p className="text-sm text-muted-foreground">45.2K engagements</p>
                    </div>
                    <Badge variant="secondary">+18%</Badge>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                      <Share className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Tech Review Video</p>
                      <p className="text-sm text-muted-foreground">32.8K shares</p>
                    </div>
                    <Badge variant="secondary">+25%</Badge>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Behind the Scenes</p>
                      <p className="text-sm text-muted-foreground">18.5K comments</p>
                    </div>
                    <Badge variant="secondary">+12%</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Audience Tab */}
          <TabsContent value="audience" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-soft border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg">Age Demographics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={audienceData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {audienceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg">Platform Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {platformData.map((platform) => (
                      <div key={platform.platform} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                        <div>
                          <p className="font-medium">{platform.platform}</p>
                          <p className="text-sm text-muted-foreground">{platform.posts} posts</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{platform.reach.toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">{platform.engagement}% engagement</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <Card className="shadow-soft border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-lg">Content Performance by Type</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={[
                    { type: 'Photos', posts: 45, avgEngagement: 4.2, reach: 180000 },
                    { type: 'Videos', posts: 23, avgEngagement: 6.8, reach: 145000 },
                    { type: 'Stories', posts: 78, avgEngagement: 3.1, reach: 95000 },
                    { type: 'Reels', posts: 34, avgEngagement: 8.5, reach: 210000 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="type" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 16px rgba(99, 102, 241, 0.12)'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="avgEngagement" fill="#6366f1" name="Avg Engagement %" />
                    <Bar dataKey="reach" fill="#10b981" name="Reach" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Campaigns Tab */}
          <TabsContent value="campaigns" className="space-y-6">
            <Card className="shadow-soft border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-lg">Campaign Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {campaignData.map((campaign) => (
                    <div key={campaign.name} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-medium">{campaign.name}</h4>
                          <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                            {campaign.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Budget</p>
                            <p className="font-medium">${campaign.budget.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Spent</p>
                            <p className="font-medium">${campaign.spent.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">ROI</p>
                            <p className="font-medium text-success">{campaign.roi}%</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full gradient-primary rounded-full" 
                          style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}