import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RiskBadge from "@/components/RiskBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, MapPin, Clock } from "lucide-react";

const Dashboard = () => {
  const predictions = [
    { time: "Now", level: "low" as const, rainfall: "2mm" },
    { time: "+30 min", level: "low" as const, rainfall: "3mm" },
    { time: "+1 hour", level: "medium" as const, rainfall: "8mm" },
    { time: "+2 hours", level: "medium" as const, rainfall: "12mm" },
    { time: "+3 hours", level: "high" as const, rainfall: "18mm" },
    { time: "+4 hours", level: "high" as const, rainfall: "22mm" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Flood Monitoring Dashboard</h1>
            <p className="text-muted-foreground">Real-time flood predictions and rainfall data</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Map Section */}
            <div className="lg:col-span-2">
              <Card className="p-6 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Interactive Flood Map
                  </h2>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
                
                {/* Map Placeholder */}
                <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      viewBox="0 0 800 500"
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* River */}
                      <path
                        d="M100,250 Q200,200 300,250 T500,250 Q600,280 700,250"
                        fill="none"
                        stroke="hsl(210 85% 45%)"
                        strokeWidth="40"
                        opacity="0.3"
                      />
                      
                      {/* High Risk Zones */}
                      <circle cx="250" cy="250" r="60" fill="hsl(0 84% 60% / 0.3)" />
                      <circle cx="550" cy="260" r="50" fill="hsl(0 84% 60% / 0.3)" />
                      
                      {/* Medium Risk Zones */}
                      <circle cx="400" cy="280" r="70" fill="hsl(45 93% 47% / 0.3)" />
                      <circle cx="650" cy="230" r="55" fill="hsl(45 93% 47% / 0.3)" />
                      
                      {/* Low Risk Zones */}
                      <circle cx="150" cy="200" r="50" fill="hsl(142 76% 36% / 0.3)" />
                      <circle cx="450" cy="180" r="60" fill="hsl(142 76% 36% / 0.3)" />
                      
                      {/* Grid lines */}
                      <g stroke="hsl(210 20% 80%)" strokeWidth="1" opacity="0.2">
                        <line x1="0" y1="100" x2="800" y2="100" />
                        <line x1="0" y1="200" x2="800" y2="200" />
                        <line x1="0" y1="300" x2="800" y2="300" />
                        <line x1="0" y1="400" x2="800" y2="400" />
                        <line x1="200" y1="0" x2="200" y2="500" />
                        <line x1="400" y1="0" x2="400" y2="500" />
                        <line x1="600" y1="0" x2="600" y2="500" />
                      </g>
                    </svg>
                  </div>
                  
                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <h3 className="text-xs font-semibold mb-2">Risk Levels</h3>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-3 h-3 rounded-full bg-risk-low" />
                        <span>Low</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-3 h-3 rounded-full bg-risk-medium" />
                        <span>Medium</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-3 h-3 rounded-full bg-risk-high" />
                        <span>High</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Predictions Panel */}
            <div>
              <Card className="p-6 shadow-card">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Rainfall Timeline
                </h2>
                
                <div className="space-y-3">
                  {predictions.map((pred, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-secondary/50 border border-border hover:shadow-sm transition-smooth"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{pred.time}</span>
                        <RiskBadge level={pred.level} size="sm" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Expected rainfall: <span className="font-semibold">{pred.rainfall}</span>
                      </p>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-4 shadow-water">
                  <Download className="h-4 w-4 mr-2" />
                  Download Full Report
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
