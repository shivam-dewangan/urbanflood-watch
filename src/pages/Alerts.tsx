import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RiskBadge from "@/components/RiskBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, Bell, Smartphone } from "lucide-react";
import { toast } from "sonner";

type RiskLevel = "low" | "medium" | "high" | "critical";

const Alerts = () => {
  const [location, setLocation] = useState("");
  const [riskResult, setRiskResult] = useState<RiskLevel | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const checkRisk = () => {
    if (!location.trim()) {
      toast.error("Please enter a location");
      return;
    }

    setIsChecking(true);
    
    // Simulate API call
    setTimeout(() => {
      const risks: RiskLevel[] = ["low", "medium", "high"];
      const randomRisk = risks[Math.floor(Math.random() * risks.length)];
      setRiskResult(randomRisk);
      setIsChecking(false);
      toast.success("Risk assessment complete!");
    }, 1500);
  };

  const useCurrentLocation = () => {
    setIsChecking(true);
    toast.info("Getting your location...");
    
    setTimeout(() => {
      setLocation("Current Location (GPS)");
      const risks: RiskLevel[] = ["low", "medium", "high"];
      const randomRisk = risks[Math.floor(Math.random() * risks.length)];
      setRiskResult(randomRisk);
      setIsChecking(false);
      toast.success("Location acquired!");
    }, 2000);
  };

  const subscribeAlerts = () => {
    toast.success("You're now subscribed to flood alerts for this area!");
  };

  const riskMessages = {
    low: {
      title: "You're Safe!",
      message: "Current flood risk is minimal. Continue monitoring for updates.",
      color: "text-risk-low",
    },
    medium: {
      title: "Stay Alert",
      message: "Moderate flood risk detected. Prepare emergency supplies and monitor alerts.",
      color: "text-risk-medium",
    },
    high: {
      title: "Take Action Now",
      message: "High flood risk! Move to higher ground and follow evacuation orders.",
      color: "text-risk-high",
    },
    critical: {
      title: "Emergency Alert",
      message: "Critical flood conditions! Evacuate immediately to designated safe zones.",
      color: "text-risk-critical",
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Bell className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Check Flood Risk in Your Area</h1>
            <p className="text-muted-foreground">Enter your location or use GPS to get instant risk assessment</p>
          </div>

          {/* Location Input */}
          <Card className="p-6 md:p-8 shadow-card mb-8">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter address, city, or zip code..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10"
                    onKeyDown={(e) => e.key === "Enter" && checkRisk()}
                  />
                </div>
                <Button
                  onClick={checkRisk}
                  disabled={isChecking}
                  className="shadow-water"
                >
                  {isChecking ? "Checking..." : "Check Risk"}
                </Button>
              </div>
              
              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={useCurrentLocation}
                  disabled={isChecking}
                  className="gap-2"
                >
                  <MapPin className="h-4 w-4" />
                  Use My Current Location
                </Button>
              </div>
            </div>
          </Card>

          {/* Risk Result */}
          {riskResult && (
            <Card className="p-6 md:p-8 shadow-card animate-in fade-in slide-in-from-bottom-4">
              <div className="text-center space-y-6">
                <div>
                  <RiskBadge level={riskResult} size="lg" className="mb-4" />
                  <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${riskMessages[riskResult].color}`}>
                    {riskMessages[riskResult].title}
                  </h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    {riskMessages[riskResult].message}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <Button onClick={subscribeAlerts} className="shadow-water gap-2">
                    <Bell className="h-4 w-4" />
                    Subscribe for Alerts
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Smartphone className="h-4 w-4" />
                    Get SMS Updates
                  </Button>
                </div>

                {/* Additional Info */}
                <div className="grid md:grid-cols-2 gap-4 pt-6 border-t">
                  <div className="text-left p-4 rounded-lg bg-secondary/50">
                    <h3 className="font-semibold mb-2 text-sm">Next Update</h3>
                    <p className="text-xs text-muted-foreground">Risk assessment refreshes every 30 minutes</p>
                  </div>
                  <div className="text-left p-4 rounded-lg bg-secondary/50">
                    <h3 className="font-semibold mb-2 text-sm">Emergency Contact</h3>
                    <p className="text-xs text-muted-foreground">Call 911 for immediate assistance</p>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Info Cards */}
          {!riskResult && (
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4 text-center shadow-card hover:shadow-water transition-smooth">
                <div className="w-10 h-10 rounded-full bg-risk-low/10 flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 rounded-full bg-risk-low" />
                </div>
                <h3 className="font-semibold mb-1 text-sm">Low Risk</h3>
                <p className="text-xs text-muted-foreground">Safe conditions, stay informed</p>
              </Card>

              <Card className="p-4 text-center shadow-card hover:shadow-water transition-smooth">
                <div className="w-10 h-10 rounded-full bg-risk-medium/10 flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 rounded-full bg-risk-medium" />
                </div>
                <h3 className="font-semibold mb-1 text-sm">Medium Risk</h3>
                <p className="text-xs text-muted-foreground">Monitor closely, prepare</p>
              </Card>

              <Card className="p-4 text-center shadow-card hover:shadow-water transition-smooth">
                <div className="w-10 h-10 rounded-full bg-risk-high/10 flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 rounded-full bg-risk-high" />
                </div>
                <h3 className="font-semibold mb-1 text-sm">High Risk</h3>
                <p className="text-xs text-muted-foreground">Take action immediately</p>
              </Card>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Alerts;
