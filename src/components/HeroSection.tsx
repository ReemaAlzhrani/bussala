import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, TrendingUp, Target } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [businessType, setBusinessType] = useState("");

  const handleSearch = () => {
    console.log("البحث عن:", businessType);
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-success/10" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-2 mb-6">
            <MapPin className="w-8 h-8 text-primary" />
            <Target className="w-8 h-8 text-success" />
            <TrendingUp className="w-8 h-8 text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            اكتشف أفضل موقع{" "}
            <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              لاستثمارك
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            منصة ذكية تحلل البيانات وتقترح عليك أنسب المواقع الاستثمارية داخل المدينة 
            بناءً على نوع مشروعك وميزانيتك
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto bg-background/95 backdrop-blur p-6 rounded-2xl shadow-lg border border-border/50">
            <div className="flex gap-3">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="مثال: مطعم، كوفي شوب، عيادة، متجر ملابس..."
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="text-lg h-12"
                />
              </div>
              <Button 
                onClick={handleSearch}
                size="lg" 
                className="px-8 gap-2 h-12"
              >
                <Search className="w-5 h-5" />
                ابحث الآن
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-sm text-muted-foreground">اقتراحات شائعة:</span>
              {["مطعم", "كوفي شوب", "عيادة", "متجر ملابس"].map((suggestion) => (
                <Button 
                  key={suggestion}
                  variant="outline" 
                  size="sm"
                  onClick={() => setBusinessType(suggestion)}
                  className="text-xs"
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">موقع محلل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">95%</div>
              <div className="text-sm text-muted-foreground">دقة التوصيات</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">مستثمر</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;