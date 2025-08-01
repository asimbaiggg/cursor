import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Search, 
  TrendingUp, 
  DollarSign,
  Eye,
  MessageCircle,
  BarChart3,
  Settings,
  Bell,
  Star,
  Calendar,
  CheckCircle,
  Filter,
  Target,
  Sparkles,
  ArrowUpRight,
  Clock,
  Award,
  Video
} from 'lucide-react';

interface InfluencerDashboardProps {
  onNavigate: (page: string) => void;
  notifications: any[];
  onMarkNotificationRead: (id: number) => void;
}

export function InfluencerDashboard({ onNavigate, notifications, onMarkNotificationRead }: InfluencerDashboardProps) {
  const unreadCount = notifications.filter(n => !n.isRead).length;

  const opportunities = [
    {
      id: 1,
      brand: "TechStyle",
      campaign: "Spring Fashion Launch",
      category: "Fashion",
      budget: "$750",
      deadline: "March 15",
      requirements: "1 Instagram post + 3 stories",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop",
      isNew: true,
      matchScore: 95
    },
    {
      id: 2,
      brand: "EcoBeauty",
      campaign: "Sustainable Skincare",
      category: "Beauty",
      budget: "$500",
      deadline: "March 20",
      requirements: "1 TikTok video + 1 Instagram reel",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=100&h=100&fit=crop",
      isNew: false,
      matchScore: 87
    },
    {
      id: 3,
      brand: "FitLife",
      campaign: "Workout Gear Review",
      category: "Fitness",
      budget: "$300",
      deadline: "March 25",
      requirements: "1 YouTube video review",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
      isNew: true,
      matchScore: 78
    }
  ];

  const activeCampaigns = [
    {
      id: 1,
      brand: "StyleCo",
      campaign: "Winter Collection",
      status: "in-progress",
      payment: "$800",
      deadline: "March 10",
      deliverables: 2,
      completed: 1,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      brand: "TechGear",
      campaign: "Gadget Reviews",
      status: "pending-review",
      payment: "$600",
      deadline: "March 18",
      deliverables: 3,
      completed: 3,
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=100&h=100&fit=crop"
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
              <Button variant="ghost" onClick={() => onNavigate('discovery')}>Opportunities</Button>
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
            <h1 className="mb-2">Creator Dashboard</h1>
            <p className="text-muted-foreground">Track your partnerships and grow your influence</p>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline"
              onClick={() => onNavigate('video-call')}
            >
              <Video className="w-4 h-4 mr-2" />
              Join Meeting
            </Button>
            <Button 
              className="gradient-primary text-white shadow-soft hover:shadow-medium transition-all" 
              onClick={() => onNavigate('profile')}
            >
              <Award className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-soft border-0 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">This Month</p>
                  <p className="text-2xl font-semibold">$2,450</p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +18% from last month
                  </p>
                </div>
                <div className="w-12 h-12 gradient-success rounded-xl flex items-center justify-center shadow-soft">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft border-0 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Campaigns</p>
                  <p className="text-2xl font-semibold">5</p>
                  <p className="text-xs text-muted-foreground mt-1">2 pending review</p>
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
                  <p className="text-sm text-muted-foreground mb-1">Creator Rating</p>
                  <p className="text-2xl font-semibold">4.9</p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +0.2 this month
                  </p>
                </div>
                <div className="w-12 h-12 bg-warning rounded-xl flex items-center justify-center shadow-soft">
                  <Star className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft border-0 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Reach</p>
                  <p className="text-2xl font-semibold">125K</p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +12% this month
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
          {/* Opportunities */}
          <div className="xl:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2>New Opportunities</h2>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" onClick={() => onNavigate('discovery')}>
                  <Search className="w-4 h-4 mr-2" />
                  Browse All
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {opportunities.map((opportunity) => (
                <Card key={opportunity.id} className="shadow-soft border-0 bg-white hover:shadow-medium transition-all">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <ImageWithFallback 
                        src={opportunity.image}
                        alt={opportunity.brand}
                        className="w-20 h-20 rounded-xl object-cover shadow-soft"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3>{opportunity.campaign}</h3>
                              {opportunity.isNew && (
                                <Badge variant="default" className="text-xs px-2 py-0">New</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{opportunity.brand}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <Badge variant="secondary" className="text-xs px-2 py-0">
                                {opportunity.category}
                              </Badge>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {opportunity.deadline}
                              </span>
                              <span className="flex items-center gap-1">
                                <Target className="w-3 h-3" />
                                {opportunity.matchScore}% match
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-lg">{opportunity.budget}</p>
                            <p className="text-xs text-muted-foreground">per campaign</p>
                          </div>
                        </div>
                        
                        <p className="text-sm mb-4 text-muted-foreground">{opportunity.requirements}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-24 bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full gradient-primary rounded-full" 
                                style={{ width: `${opportunity.matchScore}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-muted-foreground">{opportunity.matchScore}% match</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                            <Button size="sm" className="gradient-primary text-white">
                              Apply Now
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
            {/* Active Campaigns */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2>Active Campaigns</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              
              <div className="space-y-4">
                {activeCampaigns.map((campaign) => (
                  <Card key={campaign.id} className="shadow-soft border-0 bg-white hover:shadow-medium transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <ImageWithFallback 
                          src={campaign.image}
                          alt={campaign.brand}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="truncate">{campaign.campaign}</h4>
                            <Badge 
                              variant={campaign.status === 'in-progress' ? 'default' : 'secondary'}
                              className="text-xs px-2 py-0"
                            >
                              {campaign.status.replace('-', ' ')}
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-3">{campaign.brand}</p>
                          
                          <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                            <div>
                              <p className="text-muted-foreground">Payment</p>
                              <p className="font-medium">{campaign.payment}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Deadline</p>
                              <p className="font-medium">{campaign.deadline}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs text-muted-foreground">
                              Progress: {campaign.completed}/{campaign.deliverables}
                            </span>
                            <div className="h-1.5 w-16 bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full gradient-success rounded-full" 
                                style={{ width: `${(campaign.completed / campaign.deliverables) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" className="h-7 px-2 text-xs">
                              <MessageCircle className="w-3 h-3 mr-1" />
                              Chat
                            </Button>
                            <Button size="sm" className="h-7 px-2 text-xs">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Submit
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
                  onClick={() => onNavigate('profile')}
                >
                  <Settings className="w-4 h-4 mr-3" />
                  Update Portfolio
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
                >
                  <DollarSign className="w-4 h-4 mr-3" />
                  Payment History
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start h-10"
                  onClick={() => onNavigate('discovery')}
                >
                  <Search className="w-4 h-4 mr-3" />
                  Find Opportunities
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start h-10"
                  onClick={() => onNavigate('video-call')}
                >
                  <Video className="w-4 h-4 mr-3" />
                  Join Video Call
                </Button>
              </CardContent>
            </Card>

            {/* Performance Overview */}
            <Card className="shadow-soft border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-base">This Month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Active Projects</span>
                  </div>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">Completed</span>
                  </div>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Earnings</span>
                  </div>
                  <span className="font-medium">$2,450</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-warning" />
                    <span className="text-sm">Rating</span>
                  </div>
                  <span className="font-medium">4.9/5</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}