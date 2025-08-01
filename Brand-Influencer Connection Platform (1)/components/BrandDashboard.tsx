import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  TrendingUp, 
  Users, 
  DollarSign,
  Eye,
  MessageCircle,
  BarChart3,
  Settings,
  Bell,
  Filter,
  Calendar,
  Target,
  Sparkles,
  ArrowUpRight,
  Activity,
  Video
} from 'lucide-react';

interface BrandDashboardProps {
  onNavigate: (page: string) => void;
  notifications: any[];
  onMarkNotificationRead: (id: number) => void;
}

export function BrandDashboard({ onNavigate, notifications, onMarkNotificationRead }: BrandDashboardProps) {
  const unreadCount = notifications.filter(n => !n.isRead).length;

  const campaigns = [
    {
      id: 1,
      name: "Summer Collection Launch",
      status: "active",
      influencers: 12,
      budget: "$25,000",
      spent: "$18,500",
      performance: "+24%",
      reach: "2.4M",
      engagement: "4.2%",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
      deadline: "Mar 15"
    },
    {
      id: 2,
      name: "Back to School Campaign",
      status: "draft",
      influencers: 0,
      budget: "$15,000",
      spent: "$0",
      performance: "N/A",
      reach: "0",
      engagement: "0%",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
      deadline: "Mar 20"
    },
    {
      id: 3,
      name: "Holiday Special",
      status: "completed",
      influencers: 8,
      budget: "$18,500",
      spent: "$17,200",
      performance: "+31%",
      reach: "1.8M",
      engagement: "5.1%",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop",
      deadline: "Completed"
    }
  ];

  const topInfluencers = [
    {
      name: "Sarah Johnson",
      category: "Fashion",
      followers: "125K",
      engagement: "4.2%",
      rate: "$500",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5c1?w=100&h=100&fit=crop&crop=face",
      verified: true,
      growth: "+12%"
    },
    {
      name: "Mike Chen",
      category: "Tech",
      followers: "89K",
      engagement: "5.1%",
      rate: "$400",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      verified: true,
      growth: "+8%"
    },
    {
      name: "Emma Wilson",
      category: "Lifestyle",
      followers: "200K",
      engagement: "3.8%",
      rate: "$750",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      verified: true,
      growth: "+15%"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass border-b border-border/20 sticky top-0 z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center shadow-soft">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-semibold">ConnectCo</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" className="text-primary font-medium">Dashboard</Button>
              <Button variant="ghost" onClick={() => onNavigate('discovery')}>Discover</Button>
              <Button variant="ghost" onClick={() => onNavigate('analytics')}>Analytics</Button>
              <Button variant="ghost" onClick={() => onNavigate('messages')}>Messages</Button>
              <Button variant="ghost" onClick={() => onNavigate('profile')}>Profile</Button>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => onNavigate('notifications')}
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">{unreadCount}</span>
                </div>
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
            <div className="w-8 h-8 gradient-primary rounded-full"></div>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="mb-2">Brand Dashboard</h1>
            <p className="text-muted-foreground">Manage your influencer campaigns and partnerships</p>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline"
              onClick={() => onNavigate('video-call')}
            >
              <Video className="w-4 h-4 mr-2" />
              Start Meeting
            </Button>
            <Button 
              className="gradient-primary text-white shadow-soft hover:shadow-medium transition-all group" 
              onClick={() => onNavigate('create-campaign')}
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Campaign
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-soft border-0 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Campaigns</p>
                  <p className="text-2xl font-semibold">12</p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +20% this month
                  </p>
                </div>
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-soft">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft border-0 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Reach</p>
                  <p className="text-2xl font-semibold">2.4M</p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +15% this month
                  </p>
                </div>
                <div className="w-12 h-12 gradient-success rounded-xl flex items-center justify-center shadow-soft">
                  <Users className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft border-0 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Budget Spent</p>
                  <p className="text-2xl font-semibold">$58.5K</p>
                  <p className="text-xs text-muted-foreground mt-1">of $75K total</p>
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
                  <p className="text-sm text-muted-foreground mb-1">Avg. Engagement</p>
                  <p className="text-2xl font-semibold">4.2%</p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +0.3% this month
                  </p>
                </div>
                <div className="w-12 h-12 bg-destructive rounded-xl flex items-center justify-center shadow-soft">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Campaigns */}
          <div className="xl:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2>Your Campaigns</h2>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className="shadow-soft border-0 bg-white hover:shadow-medium transition-all">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <ImageWithFallback 
                        src={campaign.image}
                        alt={campaign.name}
                        className="w-20 h-20 rounded-xl object-cover shadow-soft"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="mb-2">{campaign.name}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {campaign.influencers} creators
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {campaign.deadline}
                              </span>
                              <span className="flex items-center gap-1">
                                <Target className="w-3 h-3" />
                                {campaign.reach} reach
                              </span>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-muted-foreground">Budget</p>
                            <p className="font-medium">{campaign.budget}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Spent</p>
                            <p className="font-medium">{campaign.spent}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Performance</p>
                            <p className="font-medium text-success">{campaign.performance}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Badge 
                            variant={campaign.status === 'active' ? 'default' : 
                                   campaign.status === 'draft' ? 'secondary' : 'outline'}
                            className="capitalize"
                          >
                            {campaign.status}
                          </Badge>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              Chat
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => onNavigate('analytics')}>
                              <Activity className="w-4 h-4 mr-1" />
                              Analytics
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recommended Creators */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2>Recommended Creators</h2>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => onNavigate('discovery')}
                >
                  <Search className="w-4 h-4 mr-2" />
                  Browse All
                </Button>
              </div>
              
              <div className="space-y-4">
                {topInfluencers.map((influencer, index) => (
                  <Card key={index} className="shadow-soft border-0 bg-white hover:shadow-medium transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <ImageWithFallback 
                            src={influencer.image}
                            alt={influencer.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          {influencer.verified && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="truncate">{influencer.name}</h4>
                            <span className="text-sm font-medium">{influencer.rate}/post</span>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <Badge variant="secondary" className="text-xs px-2 py-0">
                              {influencer.category}
                            </Badge>
                            <span>{influencer.followers}</span>
                            <span className="text-success">{influencer.growth}</span>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-muted-foreground">
                              {influencer.engagement} engagement
                            </span>
                            <Button size="sm" className="h-7 px-3 text-xs">
                              Connect
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <Card className="shadow-soft border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start h-10" 
                  onClick={() => onNavigate('create-campaign')}
                >
                  <Plus className="w-4 h-4 mr-3" />
                  Create New Campaign
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start h-10"
                  onClick={() => onNavigate('discovery')}
                >
                  <Search className="w-4 h-4 mr-3" />
                  Find Creators
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start h-10"
                  onClick={() => onNavigate('analytics')}
                >
                  <BarChart3 className="w-4 h-4 mr-3" />
                  View Analytics
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start h-10"
                  onClick={() => onNavigate('messages')}
                >
                  <MessageCircle className="w-4 h-4 mr-3" />
                  Messages
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start h-10"
                  onClick={() => onNavigate('video-call')}
                >
                  <Video className="w-4 h-4 mr-3" />
                  Start Video Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}