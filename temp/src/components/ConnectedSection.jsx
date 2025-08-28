import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ExternalLink, LogOut, CheckCircle } from "lucide-react";

export function ConnectedSection({ onLogout }) {
  const handleOpenStrava = () => {
    window.open('https://www.strava.com', '_blank');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://c02.purpledshub.com/uploads/sites/47/2018/09/GettyImages-55856350-309e6c6.jpg?w=1029&webp=1')` }}
      />
      
      {/* Vibrant Gradient Overlays for Flow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-pink-600/30" />
      <div className="absolute inset-0 bg-gradient-to-tl from-orange-500/20 via-transparent to-cyan-500/20" />
      
      {/* Animated Gradient Orbs for Visual Flow */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-25 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-20 w-24 h-24 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-lg opacity-20 animate-pulse delay-500" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Success Title Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-400 mr-4" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Successfully Connected!
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your Strava account is now connected to{" "}
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              Fluxa
            </span>
            . Start uploading activities and watch them get fun emoji titles automatically!
          </p>
        </div>
        
        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Open Strava Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 md:p-8 transform hover:scale-105 transition-all duration-300">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  Open Strava
                </span>
              </h3>
              
              <p className="text-white/80 mb-6">
                Go to your Strava account to upload new activities and see your emoji titles in action
              </p>
              
              <Button 
                onClick={handleOpenStrava}
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white border-0 px-6 py-3 font-semibold shadow-xl hover:shadow-orange-500/25 transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.599h4.172L10.463 0l-7.008 13.828h4.172"/>
                </svg>
                Launch Strava
              </Button>
            </div>
          </Card>

          {/* Logout Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 md:p-8 transform hover:scale-105 transition-all duration-300">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogOut className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Disconnect Account
                </span>
              </h3>
              
              <p className="text-white/80 mb-6">
                Need to switch accounts or disconnect? You can safely logout and reconnect anytime
              </p>
              
              <Button 
                onClick={onLogout}
                variant="outline"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white backdrop-blur px-6 py-3 font-semibold transition-all duration-300"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Disconnect
              </Button>
            </div>
          </Card>
        </div>

        {/* Feature Preview */}
        <div className="mt-12">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-white mb-3">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                🎉 What happens next?
              </span>
            </h4>
            <p className="text-white/70 text-sm">
              Every time you upload a new activity to Strava, Fluxa will automatically add a fun emoji title to make your workouts more engaging and memorable!
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}