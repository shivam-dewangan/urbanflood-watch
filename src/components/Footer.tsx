import { Droplets, Phone, Mail, MapPin, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Droplets className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold">FloodGuard</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Real-time flood prediction and alert system powered by advanced modeling and AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-smooth">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/alerts" className="text-muted-foreground hover:text-primary transition-smooth">
                  Check Alerts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>Emergency: 911</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>Support: 1-800-FLOOD</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@floodguard.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Urban Safety Center</span>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="font-semibold mb-4">Get Mobile App</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-smooth">
                <Download className="h-5 w-5" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-smooth">
                <Download className="h-5 w-5" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FloodGuard. All rights reserved. Powered by advanced hydrologic modeling.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
