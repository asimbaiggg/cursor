import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Search, 
  Filter, 
  MapPin, 
  Users, 
  TrendingUp,
  Instagram,
  Youtube,
  MessageCircle,
  Heart,
  Star,
  Calendar,
  DollarSign
} from 'lucide-react';

interface DiscoveryPageProps {
  userType: 'brand' | 'influencer' | null;
  onNavigate: (page: string) => void;
}

export function DiscoveryPage({ userType, onNavigate }: DiscoveryPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const influencers = [
    {
      id: 1,
      name: "Sarah Johnson",
      category: "Fashion & Style",
      location: "Los Angeles, CA",
      followers: "125K",
      engagement: "4.2%",
      rating: 4.9,
      rate: "$500-750",
      platforms: ["instagram", "tiktok"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5c1?w=150&h=150&fit=crop&crop=face",
      verified: true
    },
    {
      id: 2,
      name: "Mike Chen",
      category: "Technology",
      location: "San Francisco, CA",
      followers: "89K",
      engagement: "5.1%",
      rating: 4.8,
      rate: "$400-600",
      platforms: ["youtube", "instagram"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      verified: true
    },
    {
      id: 3,
      name: "Emma Wilson",
      category: "Lifestyle",
      location: "New York, NY",
      followers: "200K",
      engagement: "3.8%",
      rating: 4.7,
      rate: "$600-900",
      platforms: ["instagram", "youtube"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      verified: true
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      category: "Fitness",
      location: "Miami, FL",
      followers: "75K",
      engagement: "6.2%",
      rating: 4.9,
      rate: "$300-500",
      platforms: ["instagram", "tiktok"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      verified: false
    },
    {
      id: 5,
      name: "Jessica Park",
      category: "Beauty",
      location: "Seattle, WA",
      followers: "95K",
      engagement: "4.5%",
      rating: 4.8,
      rate: "$400-650",
      platforms: ["instagram", "youtube"],
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      verified: true
    },
    {
      id: 6,
      name: "David Kim",
      category: "Food & Travel",
      location: "Chicago, IL",
      followers: "110K",
      engagement: "3.9%",
      rating: 4.6,
      rate: "$500-750",
      platforms: ["instagram", "youtube"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      verified: true
    }
  ];

  const campaigns = [
    {
      id: 1,
      brand: "TechStyle",
      title: "Spring Fashion Launch",
      category: "Fashion",
      budget: "$500-750",
      deadline: "March 15, 2025",
      requirements: "1 Instagram post + 3 stories",
      description: "Looking for fashion influencers to showcase our new spring collection.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop",
      applications: 24
    },
    {
      id: 2,
      brand: "EcoBeauty",
      title: "Sustainable Skincare Campaign",
      category: "Beauty",
      budget: "$400-600",
      deadline: "March 20, 2025",
      requirements: "1 TikTok video + 1 Instagram reel",
      description: "Promote our eco-friendly skincare line to conscious consumers.",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=150&h=150&fit=crop",
      applications: 18
    },
    {
      id: 3,
      brand: "FitLife",
      title: "Workout Gear Review",
      category: "Fitness",
      budget: "$300-500",
      deadline: "March 25, 2025",
      requirements: "1 YouTube video review",
      description: "Review our latest fitness equipment and share your honest opinion.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop",
      applications: 31
    }
  ];

  const categories = [
    "Fashion & Style",
    "Beauty",
    "Technology",
    "Fitness",
    "Lifestyle",
    "Food & Travel",
    "Gaming",
    "Business"
  ];

  const platforms = ["Instagram", "TikTok", "YouTube", "Twitter"];

  const renderInfluencerCard = (influencer: any) => (
    <Card key={influencer.id} className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative">
            <ImageWithFallback 
              src={influencer.image}
              alt={influencer.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            {influencer.verified && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3>{influencer.name}</h3>
              <Button variant="ghost" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{influencer.category}</Badge>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="w-3 h-3 fill-current" />
                <span className="text-xs">{influencer.rating}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
              <MapPin className="w-3 h-3" />
              {influencer.location}
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span>{influencer.followers}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span>{influencer.engagement}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {influencer.platforms.map((platform: string) => (
                  <div key={platform} className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    {platform === 'instagram' && <Instagram className="w-3 h-3" />}
                    {platform === 'youtube' && <Youtube className="w-3 h-3" />}
                    {platform === 'tiktok' && <span className="text-xs">T</span>}
                  </div>
                ))}
              </div>
              <div className="text-sm">{influencer.rate}</div>
            </div>
            
            <div className="flex items-center gap-2 mt-4">
              <Button size="sm" className="flex-1">Connect</Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderCampaignCard = (campaign: any) => (
    <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <ImageWithFallback 
            src={campaign.image}
            alt={campaign.brand}
            className="w-16 h-16 rounded-lg object-cover"
          />
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3>{campaign.title}</h3>
              <Button variant="ghost" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mb-2">{campaign.brand}</p>
            <p className="text-sm mb-3">{campaign.description}</p>
            
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary">{campaign.category}</Badge>
              <span className="text-sm text-muted-foreground">{campaign.applications} applications</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-500" />
                <span>{campaign.budget}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span>{campaign.deadline}</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">{campaign.requirements}</p>
            
            <div className="flex items-center gap-2">
              <Button size="sm" className="flex-1">Apply Now</Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground">C</span>
              </div>
              <span className="text-xl">ConnectCo</span>
            </div>
            <nav className="flex items-center gap-6">
              <Button variant="ghost" onClick={() => onNavigate('dashboard')}>Dashboard</Button>
              <Button variant="ghost" className="text-primary">
                {userType === 'brand' ? 'Discover' : 'Opportunities'}
              </Button>
              <Button variant="ghost" onClick={() => onNavigate('messages')}>Messages</Button>
              <Button variant="ghost" onClick={() => onNavigate('profile')}>Profile</Button>
            </nav>
          </div>
          <div className="w-8 h-8 bg-primary rounded-full"></div>
        </div>
      </header>

      <div className="p-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">
            {userType === 'brand' ? 'Discover Influencers' : 'Find Opportunities'}
          </h1>
          <p className="text-muted-foreground">
            {userType === 'brand' 
              ? 'Find the perfect creators for your brand campaigns'
              : 'Discover brand partnerships that match your content style'
            }
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder={userType === 'brand' ? 'Search influencers...' : 'Search campaigns...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
              <SelectTrigger>
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                {platforms.map((platform) => (
                  <SelectItem key={platform} value={platform.toLowerCase()}>
                    {platform}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {userType === 'brand' 
            ? influencers.map(renderInfluencerCard)
            : campaigns.map(renderCampaignCard)
          }
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Results
          </Button>
        </div>
      </div>
    </div>
  );
}