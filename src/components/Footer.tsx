import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import compassLogo from "@/assets/compass-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={compassLogo} alt="بوصلة" className="w-8 h-8" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                بوصلة
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              منصة ذكية تساعد المستثمرين على اتخاذ قرارات استثمارية مدروسة بناءً على تحليل البيانات المتقدم.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">المميزات</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">كيف يعمل</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">الأسعار</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">المدونة</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">خدماتنا</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">تحليل المواقع</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">دراسة الجدوى</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">استشارات استثمارية</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">تقارير مخصصة</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">info@bussola.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 بوصلة. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">سياسة الخصوصية</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">شروط الاستخدام</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">الدعم الفني</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;