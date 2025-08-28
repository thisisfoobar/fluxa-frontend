import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function HeroSection({ onConnect }) {
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
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Welcome To
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Fluxa
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            With this fun little app, you no longer will have boring titles. When you upload an activity it will change to a random{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-semibold">
              Emoji
            </span>
          </p>
        </div>
        
        {/* Strava Authorization Card */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 md:p-12 max-w-lg mx-auto">
          <div className="text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Strava Authorization
              </span>
            </h2>
            
            <p className="text-white/80 mb-8">
              Connect your Strava account to start adding fun emoji titles to your activities
            </p>
            
            <Button 
              onClick={onConnect}
              className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.599h4.172L10.463 0l-7.008 13.828h4.172"/>
              </svg>
              Connect to Strava
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}