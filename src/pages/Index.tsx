import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [currentTheme, setCurrentTheme] = useState<"custom" | "premium">("custom");

  const switchTheme = () => {
    const newTheme = currentTheme === "custom" ? "premium" : "custom";
    setCurrentTheme(newTheme);
    
    // Apply theme to document
    if (newTheme === "premium") {
      document.documentElement.setAttribute("data-theme", "premium");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  const customPalette = [
    { name: "Primary Dark", color: "bg-primary-dark", text: "text-white" },
    { name: "Navy Blue", color: "bg-navy-blue", text: "text-white" },
    { name: "Slate Gray", color: "bg-slate-gray", text: "text-white" },
    { name: "Accent Red", color: "bg-accent-red", text: "text-white" },
    { name: "White Sand", color: "bg-white-sand", text: "text-charcoal-club" },
    { name: "Charcoal Club", color: "bg-charcoal-club", text: "text-white" },
  ];

  const premiumPalette = [
    { name: "Midnight Navy", color: "bg-midnight-navy", text: "text-white" },
    { name: "Pearl White", color: "bg-pearl-white", text: "text-midnight-navy" },
    { name: "Onyx Black", color: "bg-onyx-black", text: "text-white" },
    { name: "Cool Slate", color: "bg-cool-slate", text: "text-white" },
    { name: "Vibrant Teal", color: "bg-vibrant-teal", text: "text-white" },
    { name: "Electric Red", color: "bg-electric-red", text: "text-white" },
    { name: "Heritage Navy", color: "bg-heritage-navy", text: "text-white" },
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-din text-3xl font-bold tracking-wide uppercase text-primary">
                Sport Design System
              </h1>
              <p className="font-inter text-sm text-muted-foreground mt-1">
                Premium Typography & Color Palettes
              </p>
            </div>
            <Button 
              onClick={switchTheme}
              variant="outline"
              className="font-inter font-medium"
            >
              Switch to {currentTheme === "custom" ? "Premium" : "Custom"} Palette
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="font-oswald text-6xl md:text-8xl font-light uppercase tracking-wider text-primary">
              Precision
            </h1>
            <h2 className="font-oswald text-4xl md:text-6xl font-normal uppercase tracking-wide text-foreground">
              Performance
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>
          
          <p className="font-lora text-xl md:text-2xl italic text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            "Excellence is not a destination; it is a continuous journey that never ends."
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="font-inter font-medium">
              Explore System
            </Button>
            <Button size="lg" variant="outline" className="font-inter font-medium">
              View Components
            </Button>
          </div>
        </section>

        {/* Typography Showcase */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="font-oswald text-4xl font-normal uppercase tracking-wide text-primary mb-2">
              Typography Stack
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Headers */}
            <Card className="p-8 space-y-6">
              <h3 className="font-oswald text-2xl font-light uppercase tracking-wide text-primary">
                Headers & Brand
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-inter text-sm text-muted-foreground mb-2">DIN Condensed Black - Logo</p>
                  <h1 className="font-din text-4xl font-bold uppercase tracking-wide text-primary">
                    BRAND LOCKUP
                  </h1>
                </div>
                
                <div>
                  <p className="font-inter text-sm text-muted-foreground mb-2">Oswald 400 - H1/H2</p>
                  <h1 className="font-oswald text-3xl font-normal uppercase tracking-wide text-foreground">
                    MAIN HEADING
                  </h1>
                </div>
                
                <div>
                  <p className="font-inter text-sm text-muted-foreground mb-2">Oswald 200 - H3/H4</p>
                  <h3 className="font-oswald text-xl font-extralight text-foreground">
                    Subheading Style
                  </h3>
                </div>
              </div>
            </Card>

            {/* Body Text */}
            <Card className="p-8 space-y-6">
              <h3 className="font-oswald text-2xl font-light uppercase tracking-wide text-primary">
                Body Text Options
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-inter text-sm text-muted-foreground mb-2">Inter - Primary Body</p>
                  <p className="font-inter text-base text-foreground leading-relaxed">
                    Clean, modern, and highly legible for digital interfaces. Perfect for main content, navigation, and UI elements.
                  </p>
                </div>
                
                <div>
                  <p className="font-inter text-sm text-muted-foreground mb-2">Lora - Feature & Quotes</p>
                  <p className="font-lora text-base text-foreground leading-relaxed italic">
                    Elegant serif contrast for emphasis, pull quotes, and premium product highlights. Adds warmth and sophistication.
                  </p>
                </div>
                
                <div>
                  <p className="font-inter text-sm text-muted-foreground mb-2">Inter Light - Captions</p>
                  <p className="font-inter text-sm font-light text-muted-foreground">
                    Subtle and refined for captions, metadata, and supporting information.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="font-oswald text-4xl font-normal uppercase tracking-wide text-primary mb-2">
              Color Palette
            </h2>
            <Badge variant="secondary" className="font-inter">
              {currentTheme === "custom" ? "Custom" : "Premium Sport"} Theme
            </Badge>
            <div className="w-16 h-0.5 bg-accent mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {(currentTheme === "custom" ? customPalette : premiumPalette).map((colorItem, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`${colorItem.color} rounded-lg h-24 md:h-32 flex items-end p-4 transition-transform group-hover:scale-105`}>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className={`${colorItem.text} font-inter text-xs font-medium`}>
                      {colorItem.name}
                    </p>
                  </div>
                </div>
                <p className="text-center font-inter text-xs text-muted-foreground mt-2">
                  {colorItem.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="bg-gradient-to-br from-card to-muted/30 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-oswald text-4xl font-light uppercase tracking-wide text-primary">
              Design Philosophy
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary rounded-lg mx-auto flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary-foreground rounded-full"></div>
                </div>
                <h3 className="font-oswald text-xl font-light uppercase tracking-wide text-foreground">
                  Precision
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  Every element crafted with meticulous attention to detail and purposeful design decisions.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-accent rounded-lg mx-auto flex items-center justify-center">
                  <div className="w-6 h-6 bg-accent-foreground rounded-full"></div>
                </div>
                <h3 className="font-oswald text-xl font-light uppercase tracking-wide text-foreground">
                  Performance
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  Optimized for speed, accessibility, and seamless user experiences across all devices.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-secondary rounded-lg mx-auto flex items-center justify-center">
                  <div className="w-6 h-6 bg-secondary-foreground rounded-full"></div>
                </div>
                <h3 className="font-oswald text-xl font-light uppercase tracking-wide text-foreground">
                  Premium
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  Sophisticated aesthetics that convey quality, professionalism, and brand excellence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-din text-lg font-bold uppercase tracking-wide text-primary">
                Sport Design System
              </p>
              <p className="font-inter text-sm text-muted-foreground">
                Premium typography & color palettes for athletic excellence
              </p>
            </div>
            
            <div className="flex gap-2">
              <Badge variant="outline" className="font-inter text-xs">
                {currentTheme === "custom" ? "Custom Palette" : "Premium Palette"}
              </Badge>
              <Badge variant="outline" className="font-inter text-xs">
                Typography Stack
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;