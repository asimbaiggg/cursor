import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Users, 
  TrendingUp, 
  MessageCircle, 
  BarChart3, 
  Star, 
  CheckCircle,
  ArrowRight,
  Play,
  Shield,
  Zap,
  Globe,
  Target,
  Award,
  Sparkles
} from 'lucide-react';

interface LandingPageProps {
  onSignUp: (type: 'brand' | 'influencer') => void;
}

export function LandingPage({ onSignUp }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-border/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-soft">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold">ConnectCo</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">Pricing</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button size="sm" className="gradient-primary text-white shadow-soft hover:shadow-medium transition-all">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-success/5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Sparkles className="w-3 h-3 mr-2" />
              Trusted by 10,000+ creators worldwide
            </Badge>
            
            <h1 className="mb-6 bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
              Connect Authentic Creators with Visionary Brands
            </h1>
            
            <p className="text-subtitle mb-12 max-w-2xl mx-auto">
              Build meaningful partnerships that drive real results. Whether you're a brand looking to reach new audiences or a creator ready to monetize your passion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                className="gradient-primary text-white px-8 py-6 text-base shadow-medium hover:shadow-large transition-all group"
                onClick={() => onSignUp('brand')}
              >
                I'm a Brand
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-base border-2 hover:border-primary hover:text-primary transition-all group"
                onClick={() => onSignUp('influencer')}
              >
                <Play className="w-4 h-4 mr-2" />
                I'm a Creator
              </Button>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-soft">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-semibold mb-2">10,000+</div>
                <p className="text-muted-foreground">Verified Creators</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 gradient-success rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-soft">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-semibold mb-2">95%</div>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-warning rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-soft">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-semibold mb-2">4.9/5</div>
                <p className="text-muted-foreground">User Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features for Brands */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Target className="w-3 h-3 mr-2" />
              For Brands
            </Badge>
            <h2 className="mb-4">Everything you need to succeed</h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Powerful tools to discover, connect, and collaborate with the perfect creators for your brand
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-3">Smart Creator Discovery</h3>
                  <p className="text-muted-foreground">
                    AI-powered matching based on audience demographics, engagement rates, and brand alignment to find your perfect creators.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 gradient-success rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-3">Real-time Analytics</h3>
                  <p className="text-muted-foreground">
                    Track campaign performance with detailed metrics, ROI calculations, and audience insights in real-time.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-warning rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-3">Secure Collaboration</h3>
                  <p className="text-muted-foreground">
                    Built-in contracts, milestone payments, and project management tools to streamline your campaigns.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="shadow-large border-0 overflow-hidden">
                <CardContent className="p-0">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                    alt="Brand dashboard preview"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features for Creators */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-3 h-3 mr-2" />
              For Creators
            </Badge>
            <h2 className="mb-4">Monetize your passion</h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Connect with premium brands, grow your audience, and build a sustainable creator business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-1">
              <Card className="shadow-large border-0 overflow-hidden">
                <CardContent className="p-0">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop"
                    alt="Creator dashboard preview"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8 lg:order-2">
              <div className="flex gap-6">
                <div className="w-12 h-12 gradient-success rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-3">Premium Brand Partnerships</h3>
                  <p className="text-muted-foreground">
                    Get matched with brands that align with your values, audience, and content style for authentic collaborations.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-3">Growth Insights</h3>
                  <p className="text-muted-foreground">
                    Track your performance, audience growth, and optimize your content strategy with detailed analytics.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-warning rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-3">Instant Payments</h3>
                  <p className="text-muted-foreground">
                    Get paid instantly with our secure payment system and transparent milestone-based structure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Trusted by industry leaders</h2>
            <p className="text-subtitle">Join thousands of successful partnerships</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-soft border-0 bg-white/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-4">Global Reach</h3>
                <p className="text-muted-foreground">
                  Connect with creators and brands from over 50 countries worldwide for truly global campaigns.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-0 bg-white/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-success rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-4">Secure & Safe</h3>
                <p className="text-muted-foreground">
                  End-to-end encryption, secure payments, and verified profiles ensure safe collaboration for everyone.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-0 bg-white/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-4">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Find matches in minutes, not days. Our AI-powered platform connects you with the right partners instantly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10"></div>
        <div className="container mx-auto px-6 text-center relative">
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="w-3 h-3 mr-2" />
            Ready to get started?
          </Badge>
          
          <h2 className="mb-6">Join the creator economy revolution</h2>
          <p className="text-subtitle mb-12 max-w-2xl mx-auto">
            Start building meaningful partnerships today. No setup fees, no long-term contracts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary text-white px-8 py-6 text-base shadow-medium hover:shadow-large transition-all group"
              onClick={() => onSignUp('brand')}
            >
              Start as a Brand
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-base border-2 hover:border-primary hover:text-primary transition-all"
              onClick={() => onSignUp('influencer')}
            >
              Join as Creator
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold">ConnectCo</span>
              </div>
              <p className="text-muted-foreground">
                Connecting authentic creators with visionary brands worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="mb-4">For Brands</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Find Creators</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Campaign Management</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4">For Creators</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Brand Partnerships</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Creator Tools</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Payment Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; 2025 ConnectCo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}