import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Download, PlayCircle, Utensils, Home, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PoultryPageProps {
  onNavigate: (page: string) => void;
}

export function PoultryPage({ onNavigate }: PoultryPageProps) {
  const steps = [
    {
      icon: Home,
      title: "الإسكان",
      description: "توفير مكان نظيف ومريح للدواجن أو الأرانب مع تهوية جيدة وحماية من الطقس",
    },
    {
      icon: Utensils,
      title: "التغذية",
      description: "توفير علف متوازن وماء نظيف بشكل يومي لضمان نمو صحي وإنتاجية عالية",
    },
    {
      icon: Heart,
      title: "الرعاية الصحية",
      description: "متابعة صحة الحيوانات والتطعيم الدوري والنظافة المستمرة للوقاية من الأمراض",
    },
  ];

  const guides = [
    {
      title: "دليل تربية الدجاج للمبتدئين",
      description: "كل ما تحتاجه لبدء مشروع تربية الدجاج في المنزل",
    },
    {
      title: "تربية الأرانب المنزلية",
      description: "دليل شامل لتربية الأرانب وتحقيق عائد مادي جيد",
    },
    {
      title: "جدول التطعيمات والرعاية",
      description: "جدول زمني للتطعيمات والفحوصات الضرورية",
    },
    {
      title: "إنشاء قن دواجن منزلي",
      description: "كيفية بناء قن بسيط وفعّال بتكلفة منخفضة",
    },
  ];

  const videos = [
    {
      title: "بناء قن دواجن منزلي",
      thumbnail: "https://images.unsplash.com/photo-1624668431028-75dfeafd9b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMGNoaWNrZW5zfGVufDF8fHx8MTc2MTMxNjAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "18:30",
    },
    {
      title: "كيفية اختيار الدجاج الصحي",
      thumbnail: "https://images.unsplash.com/photo-1624668431028-75dfeafd9b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMGNoaWNrZW5zfGVufDF8fHx8MTc2MTMxNjAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "10:15",
    },
    {
      title: "تربية الأرانب: الأساسيات",
      thumbnail: "https://images.unsplash.com/photo-1688565915204-0529f5ceefd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWJiaXRzJTIwZmFybXxlbnwxfHx8fDE3NjE0MTMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "15:45",
    },
    {
      title: "التغذية الصحيحة للدواجن",
      thumbnail: "https://images.unsplash.com/photo-1624668431028-75dfeafd9b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMGNoaWNrZW5zfGVufDF8fHx8MTc2MTMxNjAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "12:20",
    },
    {
      title: "الوقاية من أمراض الدواجن",
      thumbnail: "https://images.unsplash.com/photo-1624668431028-75dfeafd9b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMGNoaWNrZW5zfGVufDF8fHx8MTc2MTMxNjAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "14:00",
    },
    {
      title: "جمع وحفظ البيض",
      thumbnail: "https://images.unsplash.com/photo-1624668431028-75dfeafd9b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMGNoaWNrZW5zfGVufDF8fHx8MTc2MTMxNjAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "8:30",
    },
  ];

  const successStories = [
    {
      name: "أبو يوسف",
      story: "بدأت بـ 10 دجاجات، اليوم أمتلك 50 وأبيع البيض والصيصان للمجتمع المحلي",
      image: "https://images.unsplash.com/photo-1624668431028-75dfeafd9b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMGNoaWNrZW5zfGVufDF8fHx8MTc2MTMxNjAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "عائلة الحاج أحمد",
      story: "تربية الأرانب وفرت لنا مصدر بروتين يومي ودخل إضافي من البيع",
      image: "https://images.unsplash.com/photo-1688565915204-0529f5ceefd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWJiaXRzJTIwZmFybXxlbnwxfHx8fDE3NjE0MTMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "أم خالد",
      story: "مشروع الدواجن ساعدني على تعليم أطفالي وتحسين وضعنا المعيشي",
      image: "https://images.unsplash.com/photo-1624668431028-75dfeafd9b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMGNoaWNrZW5zfGVufDF8fHx8MTc2MTMxNjAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1624668431028-75dfeafd9b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMGNoaWNrZW5zfGVufDF8fHx8MTc2MTMxNjAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="تربية الدواجن والأرانب"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="mb-4 text-white">تربية الدواجن والأرانب</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              مصدر بروتين مستدام ودخل إضافي لعائلتك
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="mb-6 text-primary">لماذا تربية الدواجن والأرانب؟</h2>
          <p className="text-lg leading-relaxed">
            تربية الدواجن والأرانب في المنزل توفر مصدرًا مستدامًا للبروتين الحيواني عالي الجودة، وتساعد في تقليل الاعتماد على المنتجات المستوردة الباهظة الثمن. كما أنها مشروع بسيط يمكن البدء فيه بتكاليف منخفضة ومساحة محدودة.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="bg-accent border-none hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-3 text-primary">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Guides Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-primary">أدلة إرشادية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {guides.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Download className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">{guide.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 ml-2" />
                        تحميل PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Training Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center mb-12 text-primary">فيديوهات تعليمية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="relative aspect-video">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-sm">{video.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-primary">قصص نجاح</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-primary">{story.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "{story.story}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white">
          <h2 className="mb-4 text-white">ابدأ مشروعك اليوم</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            انضم إلى المئات من المربين الناجحين واحصل على دعم كامل من فريقنا
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={() => onNavigate("support")}
              className="bg-white text-primary hover:bg-white/90"
            >
              تعلم التربية من اليوم
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("lectures")}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              احجز استشارة مجانية
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
