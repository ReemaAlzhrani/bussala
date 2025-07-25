import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, LogIn, Settings } from "lucide-react";
import compassLogo from "@/assets/compass-logo.png";

const Header = () => {
  const [isLoggedIn] = useState(false);

  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={compassLogo} alt="بوصلة" className="w-8 h-8" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
            بوصلة
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            المميزات
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            كيف يعمل
          </a>
          <a href="#consultation" className="text-muted-foreground hover:text-foreground transition-colors">
            الاستشارات
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            الأسعار
          </a>
        </nav>

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <Button variant="outline" size="sm" className="gap-2">
                <Settings className="w-4 h-4" />
                الإعدادات
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <User className="w-4 h-4" />
                الملف الشخصي
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm">
                تسجيل الدخول
              </Button>
              <Button size="sm" className="gap-2">
                <LogIn className="w-4 h-4" />
                ابدأ مجاناً
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;