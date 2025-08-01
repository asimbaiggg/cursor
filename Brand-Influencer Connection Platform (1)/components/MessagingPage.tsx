import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowLeft, 
  Search, 
  Send, 
  Paperclip,
  Phone,
  Video,
  MoreVertical,
  Star,
  Calendar,
  DollarSign,
  CheckCircle,
  Bell,
  Settings,
  Sparkles
} from 'lucide-react';

interface MessagingPageProps {
  onNavigate: (page: string) => void;
  onAddNotification: (notification: any) => void;
}

export function MessagingPage({ onNavigate, onAddNotification }: MessagingPageProps) {
  const [selectedChat, setSelectedChat] = useState(0);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Influencer",
      lastMessage: "The product shots look amazing! I'll have the content ready by Friday.",
      time: "2 min ago",
      unread: 0,
      status: "active",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c1?w=100&h=100&fit=crop&crop=face",
      campaign: "Summer Collection Launch"
    },
    {
      id: 2,
      name: "TechStyle Co.",
      role: "Brand",
      lastMessage: "We'd love to work with you on our upcoming campaign. What are your rates?",
      time: "1 hour ago",
      unread: 2,
      status: "negotiating",
      avatar: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop",
      campaign: "Tech Accessories Review"
    },
    {
      id: 3,
      name: "Mike Chen",
      role: "Tech Reviewer",
      lastMessage: "Thanks for the opportunity! I've sent over my media kit.",
      time: "3 hours ago",
      unread: 0,
      status: "completed",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      campaign: "Gadget Unboxing Series"
    },
    {
      id: 4,
      name: "EcoBeauty",
      role: "Brand",
      lastMessage: "Could we schedule a call to discuss the campaign details?",
      time: "1 day ago",
      unread: 1,
      status: "pending",
      avatar: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=100&h=100&fit=crop",
      campaign: "Sustainable Skincare"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Sarah Johnson",
      message: "Hi! I'm really interested in your Summer Collection campaign. I love the aesthetic and think it would be a perfect fit for my audience.",
      time: "10:30 AM",
      isOwn: false
    },
    {
      id: 2,
      sender: "You",
      message: "That's great to hear! I checked out your profile and your content style aligns perfectly with our brand. What are your rates for Instagram posts and stories?",
      time: "10:45 AM",
      isOwn: true
    },
    {
      id: 3,
      sender: "Sarah Johnson",
      message: "For this type of campaign, I charge $600 for a feed post and $150 per story. I can also create some behind-the-scenes content if you're interested.",
      time: "11:00 AM",
      isOwn: false
    },
    {
      id: 4,
      sender: "You",
      message: "That works within our budget! Let's move forward. I'll send over the campaign brief and product details. When would you be available for the shoot?",
      time: "11:15 AM",
      isOwn: true
    },
    {
      id: 5,
      sender: "Sarah Johnson",
      message: "Perfect! I'm available this week and next. The product shots look amazing! I'll have the content ready by Friday.",
      time: "2 min ago",
      isOwn: false
    }
  ];

  const currentConversation = conversations[selectedChat];

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Add notification when message is sent
      onAddNotification({
        type: 'message',
        title: `New message from ${currentConversation.name}`,
        message: newMessage.substring(0, 50) + (newMessage.length > 50 ? '...' : ''),
        avatar: currentConversation.avatar
      });
      setNewMessage('');
    }
  };

  const startVideoCall = () => {
    onNavigate('video-call');
    onAddNotification({
      type: 'system',
      title: 'Video call started',
      message: `Started video call with ${currentConversation.name}`,
      avatar: currentConversation.avatar
    });
  };

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="glass border-b border-border/20">
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
                <h1 className="text-xl font-semibold">Messages</h1>
                <p className="text-sm text-muted-foreground">Communicate with your partners</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Conversations List */}
        <div className="w-80 bg-white border-r border-border flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </div>

          {/* Conversation List */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation, index) => (
              <div
                key={conversation.id}
                className={`p-4 border-b border-border cursor-pointer hover:bg-muted/30 transition-colors ${
                  selectedChat === index ? 'bg-primary/5 border-l-4 border-l-primary' : ''
                }`}
                onClick={() => setSelectedChat(index)}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <ImageWithFallback 
                      src={conversation.avatar}
                      alt={conversation.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {conversation.unread > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">{conversation.unread}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-medium truncate">{conversation.name}</h3>
                      <span className="text-xs text-muted-foreground">{conversation.time}</span>
                    </div>
                    
                    <p className="text-xs text-muted-foreground mb-1">{conversation.role}</p>
                    
                    <p className="text-sm text-muted-foreground truncate mb-2">
                      {conversation.lastMessage}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant={conversation.status === 'active' ? 'default' : 
                               conversation.status === 'completed' ? 'secondary' : 'outline'}
                        className="text-xs"
                      >
                        {conversation.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground truncate max-w-20">
                        {conversation.campaign}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white border-b border-border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ImageWithFallback 
                  src={currentConversation.avatar}
                  alt={currentConversation.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-medium">{currentConversation.name}</h2>
                  <p className="text-sm text-muted-foreground">{currentConversation.campaign}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={startVideoCall}>
                  <Video className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-md p-3 rounded-lg shadow-soft ${
                    message.isOwn
                      ? 'gradient-primary text-white'
                      : 'bg-white border border-border'
                  }`}
                >
                  <p className="text-sm">{message.message}</p>
                  <p className={`text-xs mt-1 ${
                    message.isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-border p-4">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    sendMessage();
                  }
                }}
              />
              <Button size="icon" className="gradient-primary text-white" onClick={sendMessage}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Campaign Details Sidebar */}
        <div className="w-80 bg-white border-l border-border p-4">
          <h3 className="font-medium mb-4">Campaign Details</h3>
          
          <Card className="mb-4 shadow-soft border-0">
            <CardContent className="p-4">
              <h4 className="font-medium mb-2">{currentConversation.campaign}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Budget:</span>
                  <span>$500-750</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Deadline:</span>
                  <span>March 15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Deliverables:</span>
                  <span>1 post + 3 stories</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <Button 
              className="w-full flex items-center gap-2"
              onClick={() => {
                onNavigate('video-call');
                onAddNotification({
                  type: 'system',
                  title: 'Meeting scheduled',
                  message: `Scheduled meeting with ${currentConversation.name}`,
                  avatar: currentConversation.avatar
                });
              }}
            >
              <Calendar className="w-4 h-4" />
              Schedule Meeting
            </Button>
            
            <Button variant="outline" className="w-full flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Send Contract
            </Button>
            
            <Button variant="outline" className="w-full flex items-center gap-2">
              <Star className="w-4 h-4" />
              Leave Review
            </Button>

            <Button 
              variant="outline" 
              className="w-full flex items-center gap-2"
              onClick={() => {
                onAddNotification({
                  type: 'milestone',
                  title: 'Campaign completed',
                  message: `${currentConversation.campaign} has been marked as complete`,
                  avatar: currentConversation.avatar
                });
              }}
            >
              <CheckCircle className="w-4 h-4" />
              Mark Complete
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="mt-6">
            <h4 className="font-medium mb-3 text-sm">Quick Messages</h4>
            <div className="space-y-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full text-left justify-start text-xs"
                onClick={() => setNewMessage("Thanks for your interest!")}
              >
                "Thanks for your interest!"
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full text-left justify-start text-xs"
                onClick={() => setNewMessage("Could you send your media kit?")}
              >
                "Could you send your media kit?"
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full text-left justify-start text-xs"
                onClick={() => setNewMessage("The content looks great!")}
              >
                "The content looks great!"
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}