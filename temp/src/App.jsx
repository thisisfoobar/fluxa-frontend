import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ConnectedSection } from "./components/ConnectedSection";

export default function App() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    // Simulate Strava OAuth flow
    // In a real app, this would redirect to Strava's OAuth endpoint
    setIsConnected(true);
  };

  const handleLogout = () => {
    setIsConnected(false);
  };

  return (
    <div className="min-h-screen">
      <Navigation isConnected={isConnected} onLogout={handleLogout} />
      {isConnected ? (
        <ConnectedSection onLogout={handleLogout} />
      ) : (
        <HeroSection onConnect={handleConnect} />
      )}
    </div>
  );
}