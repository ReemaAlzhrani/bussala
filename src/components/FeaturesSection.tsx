import { MapPin, BarChart3, FileText, Zap, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "خريطة تفاعلية ذكية",
      description: "استكشف المواقع المقترحة على خريطة تفاعلية مع نسب التوصية لكل موقع",
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "تحليل بيانات متقدم",
      description: "تحليل شامل للكثافة السكانية، المنافسين، ومستوى الدخل في كل منطقة",
      color: "text-success"
    },
    {
      icon: FileText,
      title: "تقارير قابلة للطباعة",
      description: "احصل على تقرير PDF مفصل مع توصياتنا وتحليل SWOT لكل موقع",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "نتائج فورية",
      description: "احصل على التوصيات خلال ثوانٍ معدودة باستخدام الذكاء الاصطناعي",
      color: "text-success"
    },
    {
      icon: Shield,
      title: "بيانات موثوقة",
      description: "نعتمد على مصادر بيانات رسمية ومحدثة لضمان دقة التوصيات",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "متابعة مستمرة",
      description: "تحديثات دورية للبيانات والمؤشرات لضمان أفضل القرارات الاستثمارية",
      color: "text-success"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            لماذا تختار{" "}
            <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              بوصلة؟
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مميزات متقدمة تساعدك على اتخاذ قرارات استثمارية مدروسة ومبنية على البيانات
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-background/50 backdrop-blur"
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-3 rounded-full bg-muted mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;