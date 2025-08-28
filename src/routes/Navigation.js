import { Button } from "../components/ui/button";

export function Navigation({ isConnected, onLogout }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-white font-semibold text-lg">
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Fluxa
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a 
                href="#" 
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
              >
                Home
              </a>
              <a 
                href="#" 
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
              >
                Strava
              </a>
            </div>
          </div>
          {isConnected ? (
            <Button 
              onClick={onLogout}
              variant="outline" 
              className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white backdrop-blur"
            >
              Logout
            </Button>
          ) : (
            <Button 
              variant="outline" 
              className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white backdrop-blur"
            >
              Get Started
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}