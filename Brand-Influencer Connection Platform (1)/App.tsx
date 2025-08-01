import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { BrandDashboard } from './components/BrandDashboard';
import { InfluencerDashboard } from './components/InfluencerDashboard';
import { ProfileView } from './components/ProfileView';
import { CampaignCreator } from './components/CampaignCreator';
import { DiscoveryPage } from './components/DiscoveryPage';
import { MessagingPage } from './components/MessagingPage';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { VideoCallPage } from './components/VideoCallPage';
import { NotificationCenter } from './components/NotificationCenter';

type UserType = 'brand' | 'influencer' | null;
type Page = 'landing' | 'dashboard' | 'profile' | 'create-campaign' | 'discovery' | 'messages' | 'analytics' | 'video-call' | 'notifications';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [userType, setUserType] = useState<UserType>(null);
  
  // Global notification state
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'campaign',
      title: 'New campaign application',
      message: 'Sarah Johnson applied to your Summer Collection campaign',
      time: '2 minutes ago',
      isRead: false,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c1?w=50&h=50&fit=crop&crop=face'
    },
    {
      id: 2,
      type: 'message',
      title: 'New message from TechStyle',
      message: 'We\'d love to discuss partnership opportunities',
      time: '1 hour ago',
      isRead: false,
      avatar: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=50&h=50&fit=crop'
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment received',
      message: '$750 payment for Winter Collection campaign',
      time: '3 hours ago',
      isRead: true,
      avatar: null
    }
  ]);

  const handleSignUp = (type: UserType) => {
    setUserType(type);
    setCurrentPage('dashboard');
  };

  const markNotificationAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const addNotification = (notification: any) => {
    setNotifications(prev => [
      {
        id: Date.now(),
        ...notification,
        time: 'Just now',
        isRead: false
      },
      ...prev
    ]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onSignUp={handleSignUp} />;
      case 'dashboard':
        return userType === 'brand' ? 
          <BrandDashboard 
            onNavigate={setCurrentPage} 
            notifications={notifications}
            onMarkNotificationRead={markNotificationAsRead}
          /> : 
          <InfluencerDashboard 
            onNavigate={setCurrentPage}
            notifications={notifications}
            onMarkNotificationRead={markNotificationAsRead}
          />;
      case 'profile':
        return <ProfileView userType={userType} onNavigate={setCurrentPage} />;
      case 'create-campaign':
        return <CampaignCreator onNavigate={setCurrentPage} />;
      case 'discovery':
        return <DiscoveryPage userType={userType} onNavigate={setCurrentPage} />;
      case 'messages':
        return <MessagingPage onNavigate={setCurrentPage} onAddNotification={addNotification} />;
      case 'analytics':
        return <AnalyticsDashboard userType={userType} onNavigate={setCurrentPage} />;
      case 'video-call':
        return <VideoCallPage onNavigate={setCurrentPage} />;
      case 'notifications':
        return (
          <NotificationCenter 
            notifications={notifications}
            onNavigate={setCurrentPage}
            onMarkAsRead={markNotificationAsRead}
          />
        );
      default:
        return <LandingPage onSignUp={handleSignUp} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderPage()}
    </div>
  );
}