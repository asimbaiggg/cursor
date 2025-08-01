import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowLeft,
  Video,
  VideoOff,
  Mic,
  MicOff,
  Phone,
  Settings,
  Users,
  MessageCircle,
  Share,
  Camera,
  Monitor,
  Grid3X3,
  Maximize,
  Volume2,
  VolumeX,
  Clock,
  Calendar,
  FileText
} from 'lucide-react';

interface VideoCallPageProps {
  onNavigate: (page: string) => void;
}

export function VideoCallPage({ onNavigate }: VideoCallPageProps) {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isCallActive, setIsCallActive] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: "Sarah Johnson",
      message: "Thanks for setting up this call!",
      time: "2:35 PM"
    },
    {
      id: 2,
      sender: "TechStyle Team",
      message: "Happy to discuss the campaign details with you.",
      time: "2:36 PM"
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  // Simulate call duration timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (isCallActive) {
        setCallDuration(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isCallActive]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const participants = [
    {
      name: "Sarah Johnson",
      role: "Fashion Influencer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c1?w=200&h=200&fit=crop&crop=face",
      isVideoOn: true,
      isMuted: false,
      isHost: false
    },
    {
      name: "TechStyle Team",
      role: "Brand Representative",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      isVideoOn: true,
      isMuted: false,
      isHost: true
    }
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages(prev => [...prev, {
        id: Date.now(),
        sender: "You",
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setNewMessage('');
    }
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onNavigate('dashboard')}
              className="text-white hover:bg-gray-700"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-white text-lg font-semibold">Campaign Discussion</h1>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock className="w-3 h-3" />
                <span>{formatDuration(callDuration)}</span>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                  Live
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
              <Users className="w-4 h-4 mr-2" />
              {participants.length}
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-gray-700"
              onClick={() => setShowChat(!showChat)}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Video Area */}
        <div className={`flex-1 p-6 ${showChat ? 'pr-0' : ''}`}>
          <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            {participants.map((participant, index) => (
              <Card key={index} className="relative overflow-hidden bg-gray-800 border-gray-700 shadow-xl">
                <CardContent className="p-0 h-full">
                  <div className="relative h-full min-h-[300px] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    {participant.isVideoOn ? (
                      <ImageWithFallback 
                        src={participant.avatar}
                        alt={participant.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center text-gray-400">
                        <VideoOff className="w-16 h-16 mb-4" />
                        <p>Camera is off</p>
                      </div>
                    )}
                    
                    {/* Overlay Controls */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-black/50 text-white border-white/20">
                          {participant.name}
                        </Badge>
                        {participant.isHost && (
                          <Badge variant="secondary" className="bg-primary/80 text-white border-primary/50">
                            Host
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {!participant.isMuted ? (
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <Mic className="w-4 h-4 text-white" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <MicOff className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Screen Share Area */}
          {isScreenSharing && (
            <Card className="mt-4 bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="h-64 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <Monitor className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">Screen Sharing Active</p>
                    <p className="text-sm opacity-75">Campaign presentation is being shared</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Chat Sidebar */}
        {showChat && (
          <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold">Meeting Chat</h3>
              <p className="text-sm text-muted-foreground">{participants.length} participants</p>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((message) => (
                <div key={message.id} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{message.sender}</span>
                    <span className="text-xs text-muted-foreground">{message.time}</span>
                  </div>
                  <p className="text-sm bg-gray-100 rounded-lg p-2">{message.message}</p>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
                <Button size="sm" onClick={sendMessage}>
                  Send
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Call Controls */}
      <div className="bg-gray-800 border-t border-gray-700 p-6">
        <div className="flex items-center justify-center gap-4">
          <Button
            variant={isMicOn ? "secondary" : "destructive"}
            size="lg"
            className="w-12 h-12 rounded-full"
            onClick={() => setIsMicOn(!isMicOn)}
          >
            {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
          </Button>
          
          <Button
            variant={isVideoOn ? "secondary" : "destructive"}
            size="lg"
            className="w-12 h-12 rounded-full"
            onClick={() => setIsVideoOn(!isVideoOn)}
          >
            {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
          </Button>
          
          <Button
            variant={isAudioOn ? "secondary" : "destructive"}
            size="lg"
            className="w-12 h-12 rounded-full"
            onClick={() => setIsAudioOn(!isAudioOn)}
          >
            {isAudioOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </Button>
          
          <Button
            variant={isScreenSharing ? "default" : "secondary"}
            size="lg"
            className="w-12 h-12 rounded-full"
            onClick={() => setIsScreenSharing(!isScreenSharing)}
          >
            <Monitor className="w-5 h-5" />
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            className="w-12 h-12 rounded-full"
          >
            <Share className="w-5 h-5" />
          </Button>
          
          <Button
            variant="destructive"
            size="lg"
            className="w-12 h-12 rounded-full"
            onClick={() => {
              setIsCallActive(false);
              onNavigate('dashboard');
            }}
          >
            <Phone className="w-5 h-5" />
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-700">
            <FileText className="w-4 h-4 mr-2" />
            Campaign Brief
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-700">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Follow-up
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-700">
            <Grid3X3 className="w-4 h-4 mr-2" />
            Whiteboard
          </Button>
        </div>
      </div>
    </div>
  );
}