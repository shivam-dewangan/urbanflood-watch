import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RainAnimation from "@/components/RainAnimation";
import RiskBadge from "@/components/RiskBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Droplets, MapPin, Zap, Bell, Database, LineChart, Cloud, Waves } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Cloud,
      title: "Rainfall Nowcasting",
      description: "Real-time precipitation forecasting using advanced meteorological models and satellite data.",
    },
    {
      icon: Waves,
      title: "Hydrologic–Hydraulic Modeling",
      description: "Sophisticated water flow simulation combining rainfall runoff and channel routing.",
    },
    {
      icon: MapPin,
      title: "GIS Flood Mapping",
      description: "Interactive geographic visualization of flood-prone areas with precise inundation zones.",
    },
    {
      icon: Bell,
      title: "Automated Alerts",
      description: "Instant notifications via SMS, email, and push alerts when flood risk increases.",
    },
  ];

  const forecasts = [
    { area: "Downtown District", risk: "low" as const, rainfall: "2-5mm" },
    { area: "Riverside Zone", risk: "medium" as const, rainfall: "8-12mm" },
    { area: "Industrial Area", risk: "high" as const, rainfall: "15-20mm" },
  ];

  const steps = [
    {
      number: "01",
      title: "Data Collection",
      description: "Gather rainfall, river levels, and weather data from sensors and satellites.",
    },
    {
      number: "02",
      title: "Advanced Modeling",
      description: "Process data through hydrologic and hydraulic models to predict water flow.",
    },
    {
      number: "03",
      title: "Risk Prediction",
      description: "Generate accurate flood forecasts and map high-risk inundation zones.",
    },
    {
      number: "04",
      title: "Instant Alerts",
      description: "Send automated warnings to citizens and agencies before flooding occurs.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <RainAnimation />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center pt-12 pb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-6 animate-in fade-in slide-in-from-bottom-3">
              <Droplets className="h-4 w-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Powered by AI & Advanced Modeling</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-in fade-in slide-in-from-bottom-4">
              Stay Ahead of the Floods
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-in fade-in slide-in-from-bottom-5">
              Real-time Forecasts & Alerts for Urban Flood Protection
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6">
              <Link to="/dashboard">
                <Button size="lg" variant="secondary" className="shadow-water gap-2">
                  <MapPin className="h-5 w-5" />
                  View Flood Map
                </Button>
              </Link>
              <Link to="/alerts">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 gap-2">
                  <Bell className="h-5 w-5" />
                  Get Alerts
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-auto">
            <path
              d="M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Flood Protection Technology</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combining meteorology, hydrology, and GIS to provide accurate flood predictions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-water transition-smooth cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Forecast Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
              <Zap className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium">Live Demo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Flood Forecasts</h2>
            <p className="text-muted-foreground">Real-time predictions updated every 30 minutes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {forecasts.map((forecast, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-water transition-smooth"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold mb-1">{forecast.area}</h3>
                    <p className="text-sm text-muted-foreground">{forecast.rainfall}</p>
                  </div>
                  <RiskBadge level={forecast.risk} size="sm" />
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-smooth ${
                      forecast.risk === "low"
                        ? "bg-risk-low w-1/3"
                        : forecast.risk === "medium"
                        ? "bg-risk-medium w-2/3"
                        : "bg-risk-high w-full"
                    }`}
                  />
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/dashboard">
              <Button variant="outline" className="gap-2">
                <LineChart className="h-4 w-4" />
                View Full Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How FloodGuard Works</h2>
            <p className="text-muted-foreground">Four-step process to keep you safe</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
