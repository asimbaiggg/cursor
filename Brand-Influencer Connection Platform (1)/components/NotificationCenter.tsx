import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowLeft,
  Bell,
  CheckCircle,
  MessageCircle,
  DollarSign,
  TrendingUp,
  Users,
  Calendar,
  Star,
  AlertCircle,
  Filter,
  MoreHorizontal,
  Trash2,
  Archive,
  Settings,
  Sparkles
} from 'lucide-react';

interface Notification {
  id: number;
  type: 'campaign' | 'message' | 'payment' | 'system' | 'milestone' | 'review';
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  avatar?: string | null;
  priority?: 'high' | 'medium' | 'low';
  actionUrl?: string;
}

interface NotificationCenterProps {
  notifications: Notification[];
  onNavigate: (page: string) => void;
  onMarkAsRead: (id: number) => void;
}

export function NotificationCenter({ notifications, onNavigate, onMarkAsRead }: NotificationCenterProps) {
  const [filter, setFilter] = useState<'all' | 'unread' | 'important'>('all');

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'unread') return !notif.isRead;
    if (filter === 'important') return notif.priority === 'high';
    return true;
  });

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'campaign':
        return <TrendingUp className="w-5 h-5 text-primary" />;
      case 'message':
        return <MessageCircle className="w-5 h-5 text-blue-500" />;
      case 'payment':
        return <DollarSign className="w-5 h-5 text-green-500" />;
      case 'milestone':
        return <CheckCircle className="w-5 h-5 text-success" />;
      case 'review':
        return <Star className="w-5 h-5 text-warning" />;
      default:
        return <Bell className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getNotificationColor = (type: string, priority?: string) => {
    if (priority === 'high') return 'border-l-destructive';
    switch (type) {
      case 'campaign':
        return 'border-l-primary';
      case 'message':
        return 'border-l-blue-500';
      case 'payment':
        return 'border-l-green-500';
      case 'milestone':
        return 'border-l-success';
      case 'review':
        return 'border-l-warning';
      default:
        return 'border-l-gray-300';
    }
  };

  const markAllAsRead = () => {
    notifications.forEach(notif => {
      if (!notif.isRead) {
        onMarkAsRead(notif.id);
      }
    });
  };

  // Mock activity feed data
  const activities = [
    {
      id: 1,
      type: 'campaign_application',
      user: 'Sarah Johnson',
      action: 'applied to your Summer Collection campaign',
      time: '2 minutes ago',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c1?w=50&h=50&fit=crop&crop=face'
    },
    {
      id: 2,
      type: 'campaign_completion',
      user: 'Mike Chen',
      action: 'completed the Tech Review campaign',
      time: '1 hour ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
    },
    {
      id: 3,
      type: 'payment_sent',
      user: 'TechStyle Co.',
      action: 'sent payment for Winter Collection campaign',
      time: '3 hours ago',
      avatar: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=50&h=50&fit=crop'
    },
    {
      id: 4,
      type: 'campaign_started',
      user: 'Emma Wilson',
      action: 'started working on Holiday Special campaign',
      time: '1 day ago',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face'
    }
  ];

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
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center shadow-soft relative">
                <Bell className="w-4 h-4 text-white" />
                {unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">{unreadCount}</span>
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-xl font-semibold">Notifications</h1>
                <p className="text-sm text-muted-foreground">
                  {unreadCount > 0 ? `${unreadCount} unread notifications` : 'All caught up!'}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={markAllAsRead}>
              <CheckCircle className="w-4 h-4 mr-2" />
              Mark all read
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-4xl mx-auto">
        <Tabs value="notifications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="activity">Activity Feed</TabsTrigger>
          </TabsList>

          <TabsContent value="notifications" className="space-y-6">
            {/* Filter Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant={filter === 'all' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setFilter('all')}
                >
                  All ({notifications.length})
                </Button>
                <Button
                  variant={filter === 'unread' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setFilter('unread')}
                >
                  Unread ({unreadCount})
                </Button>
                <Button
                  variant={filter === 'important' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setFilter('important')}
                >
                  Important
                </Button>
              </div>
              <Button variant="ghost" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Notifications List */}
            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <Card 
                  key={notification.id} 
                  className={`shadow-soft border-0 bg-white hover:shadow-medium transition-all cursor-pointer border-l-4 ${getNotificationColor(notification.type, notification.priority)} ${!notification.isRead ? 'bg-blue-50/30' : ''}`}
                  onClick={() => onMarkAsRead(notification.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        {notification.avatar ? (
                          <ImageWithFallback 
                            src={notification.avatar}
                            alt="Avatar"
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                            {getNotificationIcon(notification.type)}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className={`font-medium ${!notification.isRead ? 'text-primary' : ''}`}>
                              {notification.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {notification.message}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 ml-4">
                            {notification.priority === 'high' && (
                              <AlertCircle className="w-4 h-4 text-destructive" />
                            )}
                            {!notification.isRead && (
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            )}
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <MoreHorizontal className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs capitalize">
                              {notification.type.replace('_', ' ')}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {notification.time}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                              <Archive className="w-3 h-3 mr-1" />
                              Archive
                            </Button>
                            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredNotifications.length === 0 && (
                <Card className="shadow-soft border-0 bg-white">
                  <CardContent className="p-12 text-center">
                    <Bell className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="font-medium mb-2">No notifications</h3>
                    <p className="text-muted-foreground">
                      {filter === 'unread' 
                        ? "You're all caught up! No unread notifications."
                        : "You don't have any notifications yet."}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card className="shadow-soft border-0 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                    <ImageWithFallback 
                      src={activity.avatar}
                      alt={activity.user}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span>
                        {' '}
                        <span className="text-muted-foreground">{activity.action}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {activity.type === 'campaign_application' && <Users className="w-4 h-4 text-primary" />}
                      {activity.type === 'campaign_completion' && <CheckCircle className="w-4 h-4 text-success" />}
                      {activity.type === 'payment_sent' && <DollarSign className="w-4 h-4 text-green-500" />}
                      {activity.type === 'campaign_started' && <TrendingUp className="w-4 h-4 text-blue-500" />}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Activity Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-soft border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl font-semibold mb-1">24</p>
                  <p className="text-sm text-muted-foreground">New applications this week</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 gradient-success rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl font-semibold mb-1">12</p>
                  <p className="text-sm text-muted-foreground">Campaigns completed</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-warning rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl font-semibold mb-1">$18.5K</p>
                  <p className="text-sm text-muted-foreground">Payments processed</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}