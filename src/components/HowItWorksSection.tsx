import { ArrowLeft, Building2, DollarSign, Map, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Building2,
      title: "اختر نوع مشروعك",
      description: "حدد نوع النشاط التجاري الذي تريد الاستثمار فيه",
      color: "text-primary"
    },
    {
      icon: DollarSign,
      title: "حدد ميزانيتك",
      description: "أدخل المبلغ المتاح للاستثمار لنقترح عليك المواقع المناسبة",
      color: "text-success"
    },
    {
      icon: Map,
      title: "استكشف النتائج",
      description: "تصفح الخريطة التفاعلية واكتشف أفضل المواقع المقترحة",
      color: "text-primary"
    },
    {
      icon: FileCheck,
      title: "احصل على التقرير",
      description: "حمّل تقرير PDF شامل مع كافة التوصيات والتحليلات",
      color: "text-success"
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            كيف يعمل{" "}
            <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              بوصلة؟
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            خطوات بسيطة للوصول إلى أفضل المواقع الاستثمارية في مدينتك
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="group hover:shadow-xl transition-all duration-300 h-full bg-background/50 backdrop-blur border-2 hover:border-primary/20">
                <CardContent className="p-6 text-center relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-success rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  <div className={`inline-flex p-4 rounded-full bg-muted mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-10 h-10 ${step.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
                  <ArrowLeft className="w-6 h-6 text-primary/60 rotate-180" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-success/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">جاهز لبدء رحلتك الاستثمارية؟</h3>
            <p className="text-muted-foreground mb-6">
              ابدأ الآن واكتشف أفضل المواقع لمشروعك في دقائق معدودة
            </p>
            <button className="bg-gradient-to-r from-primary to-success text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              ابدأ التحليل المجاني
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;