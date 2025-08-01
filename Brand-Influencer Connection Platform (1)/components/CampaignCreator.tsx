import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { 
  ArrowLeft, 
  Upload, 
  Calendar, 
  DollarSign,
  Users,
  Target,
  Instagram,
  Youtube,
  X
} from 'lucide-react';

interface CampaignCreatorProps {
  onNavigate: (page: string) => void;
}

export function CampaignCreator({ onNavigate }: CampaignCreatorProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [campaignData, setCampaignData] = useState({
    title: '',
    description: '',
    budget: '',
    deadline: '',
    requirements: '',
    targetAudience: ''
  });

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: Instagram },
    { id: 'youtube', name: 'YouTube', icon: Youtube },
    { id: 'tiktok', name: 'TikTok', icon: Target },
    { id: 'twitter', name: 'Twitter', icon: Target }
  ];

  const categories = [
    'Fashion & Style',
    'Beauty',
    'Technology',
    'Fitness',
    'Lifestyle',
    'Food & Travel',
    'Gaming',
    'Business'
  ];

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(p => p !== platformId)
        : [...prev, platformId]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
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
              <h1 className="text-xl">Create New Campaign</h1>
              <p className="text-sm text-muted-foreground">Set up your influencer marketing campaign</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">Save Draft</Button>
            <Button>Publish Campaign</Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Campaign Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Campaign Title</Label>
                  <Input 
                    id="title"
                    placeholder="e.g. Summer Collection Launch"
                    value={campaignData.title}
                    onChange={(e) => setCampaignData(prev => ({ ...prev, title: e.target.value }))}
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description"
                    placeholder="Describe your campaign goals, brand values, and what you're looking for..."
                    rows={4}
                    value={campaignData.description}
                    onChange={(e) => setCampaignData(prev => ({ ...prev, description: e.target.value }))}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100-300">$100 - $300</SelectItem>
                        <SelectItem value="300-500">$300 - $500</SelectItem>
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                        <SelectItem value="2500+">$2,500+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="deadline">Application Deadline</Label>
                    <Input 
                      id="deadline"
                      type="date"
                      value={campaignData.deadline}
                      onChange={(e) => setCampaignData(prev => ({ ...prev, deadline: e.target.value }))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Platform Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {platforms.map((platform) => {
                    const Icon = platform.icon;
                    return (
                      <div
                        key={platform.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          selectedPlatforms.includes(platform.id)
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => togglePlatform(platform.id)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex items-center">
                            <Checkbox 
                              checked={selectedPlatforms.includes(platform.id)}
                              onChange={() => togglePlatform(platform.id)}
                            />
                          </div>
                          <Icon className="w-5 h-5" />
                          <span>{platform.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Target Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={selectedCategories.includes(category) ? 'default' : 'outline'}
                      className="cursor-pointer hover:bg-primary/10"
                      onClick={() => toggleCategory(category)}
                    >
                      {category}
                      {selectedCategories.includes(category) && (
                        <X className="w-3 h-3 ml-1" />
                      )}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Campaign Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="requirements">Deliverables</Label>
                  <Textarea 
                    id="requirements"
                    placeholder="e.g. 1 Instagram post, 3 Instagram stories, 1 TikTok video..."
                    rows={3}
                    value={campaignData.requirements}
                    onChange={(e) => setCampaignData(prev => ({ ...prev, requirements: e.target.value }))}
                  />
                </div>
                
                <div>
                  <Label htmlFor="targetAudience">Target Audience</Label>
                  <Textarea 
                    id="targetAudience"
                    placeholder="Describe your ideal audience demographics, interests, and characteristics..."
                    rows={3}
                    value={campaignData.targetAudience}
                    onChange={(e) => setCampaignData(prev => ({ ...prev, targetAudience: e.target.value }))}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Media Upload */}
            <Card>
              <CardHeader>
                <CardTitle>Campaign Assets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Upload product images, brand guidelines, or reference materials
                  </p>
                  <Button variant="outline" size="sm">
                    Choose Files
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Campaign Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Campaign Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Campaign Preview</span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">
                    {campaignData.title || 'Campaign Title'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {campaignData.description || 'Campaign description will appear here...'}
                  </p>
                </div>

                {selectedPlatforms.length > 0 && (
                  <div>
                    <p className="text-sm mb-2">Platforms:</p>
                    <div className="flex gap-2">
                      {selectedPlatforms.map((platformId) => {
                        const platform = platforms.find(p => p.id === platformId);
                        return platform ? (
                          <Badge key={platformId} variant="secondary">
                            {platform.name}
                          </Badge>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}

                {selectedCategories.length > 0 && (
                  <div>
                    <p className="text-sm mb-2">Categories:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedCategories.map((category) => (
                        <Badge key={category} variant="outline" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Estimated Reach</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Potential Reach</p>
                    <p className="text-lg">500K - 2M</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Matching Creators</p>
                    <p className="text-lg">150+</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Avg. Cost per Post</p>
                    <p className="text-lg">$300 - $800</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Tips for Success</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Clear campaign objectives increase application quality</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Include brand guidelines for consistent messaging</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Reasonable deadlines attract better creators</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Competitive budgets get 3x more applications</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}