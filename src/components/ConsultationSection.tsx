import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Star, MessageCircle, Phone, Video, CheckCircle } from "lucide-react";

const ConsultationSection = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedSpecialist, setSelectedSpecialist] = useState("");

  const specialists = [
    {
      id: 1,
      name: "د. أحمد السعد",
      specialty: "استشاري استثمار عقاري",
      experience: "15 سنة خبرة",
      rating: 4.9,
      reviews: 127,
      price: 300,
      image: "👨‍💼",
      available: "متاح اليوم"
    },
    {
      id: 2,
      name: "م. فاطمة الزهراني",
      specialty: "مختصة تخطيط مدن",
      experience: "12 سنة خبرة",
      rating: 4.8,
      reviews: 95,
      price: 250,
      image: "👩‍💼",
      available: "متاح غداً"
    },
    {
      id: 3,
      name: "أ. محمد العتيبي",
      specialty: "خبير تسويق تجاري",
      experience: "10 سنوات خبرة",
      rating: 4.7,
      reviews: 83,
      price: 200,
      image: "👨‍💻",
      available: "متاح الآن"
    }
  ];

  const consultationTypes = [
    {
      icon: MessageCircle,
      type: "استشارة نصية",
      duration: "30 دقيقة",
      description: "تبادل الرسائل مع المختص",
      price: "من 150 ريال"
    },
    {
      icon: Phone,
      type: "مكالمة صوتية",
      duration: "45 دقيقة",
      description: "مكالمة مباشرة مع المختص",
      price: "من 200 ريال"
    },
    {
      icon: Video,
      type: "مكالمة مرئية",
      duration: "60 دقيقة",
      description: "جلسة مرئية تفاعلية",
      price: "من 250 ريال"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            استشارات{" "}
            <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              مع المختصين
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            احصل على استشارة شخصية من خبراء الاستثمار والتخطيط لاتخاذ أفضل القرارات
          </p>
        </div>

        {/* Consultation Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {consultationTypes.map((type, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-background/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{type.type}</h3>
                <p className="text-muted-foreground mb-3">{type.description}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{type.duration}</span>
                </div>
                <div className="text-lg font-bold text-primary">{type.price}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialists */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">تعرف على خبرائنا</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {specialists.map((specialist) => (
              <Card key={specialist.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-3">{specialist.image}</div>
                    <h4 className="text-xl font-semibold mb-1">{specialist.name}</h4>
                    <p className="text-primary font-medium mb-1">{specialist.specialty}</p>
                    <p className="text-sm text-muted-foreground">{specialist.experience}</p>
                  </div>

                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{specialist.rating}</span>
                    </div>
                    <span className="text-muted-foreground">({specialist.reviews} تقييم)</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">السعر يبدأ من:</span>
                      <span className="font-bold text-primary">{specialist.price} ريال</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm text-success">{specialist.available}</span>
                    </div>

                    <Button 
                      className="w-full"
                      onClick={() => setSelectedSpecialist(specialist.name)}
                    >
                      احجز استشارة
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary/20 bg-background/80 backdrop-blur">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6">احجز استشارتك الآن</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">الاسم الكامل</label>
                    <Input placeholder="أدخل اسمك الكامل" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
                    <Input placeholder="05xxxxxxxx" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">نوع الاستشارة</label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر نوع الاستشارة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="text">استشارة نصية</SelectItem>
                        <SelectItem value="voice">مكالمة صوتية</SelectItem>
                        <SelectItem value="video">مكالمة مرئية</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">المختص المفضل</label>
                    <Select value={selectedSpecialist} onValueChange={setSelectedSpecialist}>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر المختص" />
                      </SelectTrigger>
                      <SelectContent>
                        {specialists.map((specialist) => (
                          <SelectItem key={specialist.id} value={specialist.name}>
                            {specialist.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">وصف المشروع</label>
                  <Textarea 
                    placeholder="اكتب تفاصيل مشروعك والاستشارة التي تحتاجها..."
                    rows={4}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">التاريخ المفضل</label>
                    <div className="relative">
                      <Input type="date" />
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">الوقت المفضل</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر الوقت" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">صباحاً (9:00 - 12:00)</SelectItem>
                        <SelectItem value="afternoon">بعد الظهر (1:00 - 5:00)</SelectItem>
                        <SelectItem value="evening">مساءً (6:00 - 9:00)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  احجز الاستشارة
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  سنتواصل معك خلال 24 ساعة لتأكيد موعد الاستشارة
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl p-8 border border-success/20">
            <h3 className="text-2xl font-bold mb-4">لماذا تختار استشاراتنا؟</h3>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-success mb-2" />
                <span className="font-medium">خبراء معتمدون</span>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-success mb-2" />
                <span className="font-medium">متاح 24/7</span>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-success mb-2" />
                <span className="font-medium">أسعار مناسبة</span>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-success mb-2" />
                <span className="font-medium">ضمان الجودة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;