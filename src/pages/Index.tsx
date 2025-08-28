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
    { name: "Forest Dark", color: "bg-forest-dark", text: "text-white", hex: "#0A2B26" },
    { name: "Navy Blue", color: "bg-navy-blue", text: "text-white", hex: "#172C47" },
    { name: "Forest Medium", color: "bg-forest-medium", text: "text-white", hex: "#1E493A" },
    { name: "Forest Light", color: "bg-forest-light", text: "text-white", hex: "#346845" },
    { name: "Bright Green", color: "bg-bright-green", text: "text-white", hex: "#46C162" },
    { name: "Slate Gray", color: "bg-slate-gray", text: "text-white", hex: "#707D88" },
    { name: "Accent Red", color: "bg-accent-red", text: "text-white", hex: "#ED3E49" },
  ];

  const grayScale = [
    { name: "White", color: "bg-white", text: "text-gray-900", hex: "#FFFFFF" },
    { name: "Gray 50", color: "bg-gray-50", text: "text-gray-900", hex: "#FAFBFC" },
    { name: "Gray 100", color: "bg-gray-100", text: "text-gray-900", hex: "#F1F3F4" },
    { name: "Gray 200", color: "bg-gray-200", text: "text-gray-900", hex: "#CDD2D7" },
    { name: "Gray 300", color: "bg-gray-300", text: "text-gray-900", hex: "#A9B1BA" },
    { name: "Gray 400", color: "bg-gray-400", text: "text-white", hex: "#85909D" },
    { name: "Gray 500", color: "bg-gray-500", text: "text-white", hex: "#677080" },
    { name: "Gray 600", color: "bg-gray-600", text: "text-white", hex: "#515963" },
    { name: "Gray 700", color: "bg-gray-700", text: "text-white", hex: "#3A4046" },
    { name: "Gray 800", color: "bg-gray-800", text: "text-white", hex: "#252A2E" },
    { name: "Gray 900", color: "bg-gray-900", text: "text-white", hex: "#161A1D" },
    { name: "Black", color: "bg-black", text: "text-white", hex: "#000000" },
  ];

  const premiumPalette = [
    { name: "Midnight Navy", color: "bg-midnight-navy", text: "text-white", hex: "#172C47" },
    { name: "Pearl White", color: "bg-pearl-white", text: "text-gray-900", hex: "#FAFBFC" },
    { name: "Onyx Black", color: "bg-onyx-black", text: "text-white", hex: "#161A1D" },
    { name: "Cool Slate", color: "bg-cool-slate", text: "text-white", hex: "#707D88" },
    { name: "Vibrant Green", color: "bg-vibrant-green", text: "text-white", hex: "#46C162" },
    { name: "Electric Red", color: "bg-electric-red", text: "text-white", hex: "#ED3E49" },
    { name: "Heritage Navy", color: "bg-heritage-navy", text: "text-white", hex: "#172C47" },
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
              {currentTheme === "custom" ? "Light-on-Dark / Dark-on-Light" : "Premium Sport"} Theme
            </Badge>
            <div className="w-16 h-0.5 bg-accent mx-auto mt-4"></div>
          </div>

          {/* Primary Colors */}
          <div className="space-y-6">
            <h3 className="font-oswald text-2xl font-light uppercase tracking-wide text-center">
              {currentTheme === "custom" ? "Primary Colors" : "Premium Colors"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {(currentTheme === "custom" ? customPalette : premiumPalette).map((colorItem, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className={`${colorItem.color} rounded-lg h-24 md:h-32 flex items-end p-4 transition-transform group-hover:scale-105 shadow-lg`}>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className={`${colorItem.text} font-inter text-xs font-medium`}>
                        {colorItem.hex}
                      </p>
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <p className="font-inter text-xs font-medium text-foreground">
                      {colorItem.name}
                    </p>
                    <p className="font-inter text-xs text-muted-foreground">
                      {colorItem.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gray Scale - Always shown */}
          <div className="space-y-6">
            <h3 className="font-oswald text-2xl font-light uppercase tracking-wide text-center">
              Gray Scale System
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-3">
              {grayScale.map((colorItem, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className={`${colorItem.color} rounded-lg h-20 flex items-end p-3 transition-transform group-hover:scale-105 shadow-lg border border-border/20`}>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className={`${colorItem.text} font-inter text-xs font-medium`}>
                        {colorItem.hex}
                      </p>
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <p className="font-inter text-xs font-medium text-foreground">
                      {colorItem.name}
                    </p>
                    <p className="font-inter text-xs text-muted-foreground">
                      {colorItem.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Theme Examples */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 space-y-4">
              <h4 className="font-oswald text-lg font-light uppercase tracking-wide text-primary">
                Light Theme (Current)
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-background border-2 border-border rounded"></div>
                  <div className="w-8 h-8 bg-foreground rounded"></div>
                  <span className="font-inter text-sm">Background & Text</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                  <div className="w-8 h-8 bg-accent rounded"></div>
                  <span className="font-inter text-sm">Primary & Accent</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 bg-gray-900 text-gray-50 border-gray-700">
              <h4 className="font-oswald text-lg font-light uppercase tracking-wide text-bright-green">
                Dark Theme Preview
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-900 border-2 border-gray-700 rounded"></div>
                  <div className="w-8 h-8 bg-gray-50 rounded"></div>
                  <span className="font-inter text-sm text-gray-50">Background & Text</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-bright-green rounded"></div>
                  <div className="w-8 h-8 bg-forest-light rounded"></div>
                  <span className="font-inter text-sm text-gray-50">Primary & Accent</span>
                </div>
              </div>
            </Card>
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