import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowLeft, 
  Edit, 
  MapPin, 
  Users, 
  TrendingUp,
  Instagram,
  Youtube,
  Star,
  Camera,
  Plus,
  ExternalLink
} from 'lucide-react';

interface ProfileViewProps {
  userType: 'brand' | 'influencer' | null;
  onNavigate: (page: string) => void;
}

export function ProfileView({ userType, onNavigate }: ProfileViewProps) {
  const isInfluencer = userType === 'influencer';

  const influencerProfile = {
    name: "Sarah Johnson",
    bio: "Fashion & lifestyle content creator passionate about sustainable style and empowering women through authentic storytelling.",
    location: "Los Angeles, CA",
    followers: "125K",
    engagement: "4.2%",
    rating: 4.9,
    categories: ["Fashion", "Lifestyle", "Sustainability"],
    platforms: [
      { name: "Instagram", handle: "@sarahjohnson", followers: "125K" },
      { name: "TikTok", handle: "@sarahj_style", followers: "89K" },
      { name: "YouTube", handle: "Sarah Johnson", followers: "45K" }
    ],
    rates: {
      post: "$500-750",
      story: "$150-250",
      reel: "$400-600",
      video: "$800-1200"
    },
    portfolio: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop"
    ]
  };

  const brandProfile = {
    name: "TechStyle Co.",
    description: "Modern fashion brand focused on sustainable and ethical clothing for the conscious consumer.",
    industry: "Fashion & Apparel",
    website: "www.techstyle.com",
    location: "New York, NY",
    founded: "2020",
    employees: "50-100",
    campaigns: 24,
    totalReach: "2.4M",
    avgBudget: "$15K"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onNavigate('dashboard')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl">Profile</h1>
              <p className="text-sm text-muted-foreground">Manage your profile information</p>
            </div>
          </div>
          <Button className="flex items-center gap-2">
            <Edit className="w-4 h-4" />
            Edit Profile
          </Button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        {isInfluencer ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Profile */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b5c1?w=150&h=150&fit=crop&crop=face"
                        alt={influencerProfile.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <Button size="icon" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full">
                        <Camera className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-2xl">{influencerProfile.name}</h1>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm">{influencerProfile.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        {influencerProfile.categories.map((category) => (
                          <Badge key={category} variant="secondary">{category}</Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-1 text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4" />
                        {influencerProfile.location}
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{influencerProfile.bio}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-blue-500" />
                          <span>{influencerProfile.followers} followers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span>{influencerProfile.engagement} engagement</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Platforms */}
              <Card>
                <CardHeader>
                  <CardTitle>Social Media Platforms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {influencerProfile.platforms.map((platform, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {platform.name === 'Instagram' && <Instagram className="w-5 h-5" />}
                        {platform.name === 'YouTube' && <Youtube className="w-5 h-5" />}
                        {platform.name === 'TikTok' && <span className="w-5 h-5 flex items-center justify-center text-sm">T</span>}
                        <div>
                          <p>{platform.name}</p>
                          <p className="text-sm text-muted-foreground">{platform.handle}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p>{platform.followers}</p>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Platform
                  </Button>
                </CardContent>
              </Card>

              {/* Portfolio */}
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {influencerProfile.portfolio.map((image, index) => (
                      <div key={index} className="relative group">
                        <ImageWithFallback 
                          src={image}
                          alt={`Portfolio item ${index + 1}`}
                          className="w-full aspect-square object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <Button size="sm" variant="secondary">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                    <div className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                      <Plus className="w-8 h-8 text-gray-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Rates */}
              <Card>
                <CardHeader>
                  <CardTitle>Rates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Instagram Post</span>
                    <span>{influencerProfile.rates.post}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Instagram Story</span>
                    <span>{influencerProfile.rates.story}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Instagram Reel</span>
                    <span>{influencerProfile.rates.reel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>YouTube Video</span>
                    <span>{influencerProfile.rates.video}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm">Email</label>
                    <Input value="sarah@example.com" readOnly />
                  </div>
                  <div>
                    <label className="text-sm">Phone</label>
                    <Input value="+1 (555) 123-4567" readOnly />
                  </div>
                  <div>
                    <label className="text-sm">Business Email</label>
                    <Input value="business@sarahjohnson.com" readOnly />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          /* Brand Profile */
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Basic Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground text-2xl">T</span>
                    </div>
                    <Button size="icon" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full">
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex-1">
                    <h1 className="text-2xl mb-2">{brandProfile.name}</h1>
                    <Badge variant="secondary" className="mb-3">{brandProfile.industry}</Badge>
                    <p className="text-muted-foreground mb-4">{brandProfile.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Founded</p>
                        <p>{brandProfile.founded}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Employees</p>
                        <p>{brandProfile.employees}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Location</p>
                        <p>{brandProfile.location}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Website</p>
                        <p className="text-blue-600">{brandProfile.website}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Campaign Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-2xl mb-2">{brandProfile.campaigns}</p>
                  <p className="text-muted-foreground">Total Campaigns</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-2xl mb-2">{brandProfile.totalReach}</p>
                  <p className="text-muted-foreground">Total Reach</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-2xl mb-2">{brandProfile.avgBudget}</p>
                  <p className="text-muted-foreground">Avg Campaign Budget</p>
                </CardContent>
              </Card>
            </div>

            {/* Company Details */}
            <Card>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm">Company Name</label>
                    <Input value={brandProfile.name} />
                  </div>
                  <div>
                    <label className="text-sm">Industry</label>
                    <Input value={brandProfile.industry} />
                  </div>
                  <div>
                    <label className="text-sm">Website</label>
                    <Input value={brandProfile.website} />
                  </div>
                  <div>
                    <label className="text-sm">Location</label>
                    <Input value={brandProfile.location} />
                  </div>
                </div>
                <div>
                  <label className="text-sm">Company Description</label>
                  <Textarea value={brandProfile.description} rows={3} />
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}