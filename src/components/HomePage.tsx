import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Sprout,
  Users,
  DollarSign,
  Heart,
  HandHeart,
  Leaf,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1722837487012-9c46372435f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwdmVnZXRhYmxlJTIwZ2FyZGVufGVufDF8fHx8MTc2MTQxMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "من رحم الصمود... نزرع غذاءنا بأيدينا",
    },
    {
      image: "https://images.unsplash.com/photo-1624668431028-75dfeafd9b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMGNoaWNrZW5zfGVufDF8fHx8MTc2MTMxNjAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "معًا نربي الدواجن... نحقق الاكتفاء",
    },
    {
      image: "https://images.unsplash.com/photo-1647771733859-d07c37a08940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBmYXJtaW5nfGVufDF8fHx8MTc2MTQxMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "التضامن المجتمعي... قوتنا نحو المستقبل",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goals = [
    {
      icon: Sprout,
      title: "النمو المستدام",
      description: "تعزيز الزراعة المنزلية المستدامة",
    },
    {
      icon: Users,
      title: "التمكين المجتمعي",
      description: "تمكين العائلات من الاعتماد على نفسها",
    },
    {
      icon: DollarSign,
      title: "تحسين الدخل",
      description: "خلق مصادر دخل إضافية للأسر",
    },
    {
      icon: Heart,
      title: "الصحة والتغذية",
      description: "توفير غذاء صحي وطازج للعائلات",
    },
    {
      icon: HandHeart,
      title: "التضامن",
      description: "بناء شبكة دعم مجتمعية قوية",
    },
    {
      icon: Leaf,
      title: "الاستدامة البيئية",
      description: "الحفاظ على البيئة وتحسينها",
    },
  ];

  const stats = [
    { number: "200+", label: "متطوع" },
    { number: "100+", label: "عائلة مشاركة" },
    { number: "10+", label: "مشروع زراعي" },
    { number: "50+", label: "ورشة تدريبية" },
  ];

  const videos = [
    {
      title: "كيفية بدء الزراعة المنزلية",
      thumbnail: "https://images.unsplash.com/photo-1619284477225-647ffe3d91bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVkbGluZ3MlMjBwbGFudGluZ3xlbnwxfHx8fDE3NjE0MTMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "تربية الدواجن في المنزل",
      thumbnail: "https://images.unsplash.com/photo-1624668431028-75dfeafd9b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMGNoaWNrZW5zfGVufDF8fHx8MTc2MTMxNjAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "نصائح للحصول على محصول وفير",
      thumbnail: "https://images.unsplash.com/photo-1751210769268-85d43ecfcdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBoYXJ2ZXN0fGVufDF8fHx8MTc2MTQxMjg5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center text-white">
                <h1 className="text-3xl md:text-5xl lg:text-6xl mb-8 max-w-4xl mx-auto">
                  {slide.title}
                </h1>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={() => onNavigate("farming")}
                    className="bg-primary hover:bg-primary/90"
                  >
                    ابدأ الزراعة
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => onNavigate("poultry")}
                    className="bg-secondary hover:bg-secondary/90 text-foreground border-secondary"
                  >
                    تعلم التربية
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => onNavigate("support")}
                    className="border-white text-white hover:bg-white hover:text-foreground"
                  >
                    ادعم المبادرة
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed mb-6">
            في ظل التحديات الغذائية التي تواجه قطاع غزة، تأتي مبادرة "غذاؤنا من أيدينا" كمشروع إنساني مجتمعي يهدف إلى تحقيق الأمن الغذائي من خلال تشجيع الزراعة المنزلية وتربية الدواجن والأرانب. نسعى لتمكين العائلات من إنتاج غذائها بنفسها، وبناء مجتمع أكثر استدامة واكتفاءً ذاتيًا.
          </p>
          <Button onClick={() => onNavigate("about")} variant="outline">
            اقرأ المزيد
          </Button>
        </div>
      </section>

      {/* Goals Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-primary">أهدافنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <goal.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-primary">{goal.title}</h3>
                  <p className="text-muted-foreground">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center mb-12 text-primary">إنجازاتنا</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Awareness Videos Preview */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-primary">شاهد فيديوهاتنا التوعوية</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                </div>
                <CardContent className="p-4">
                  <h3 className="text-sm">{video.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button onClick={() => onNavigate("lectures")} variant="outline">
              شاهد المزيد
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-white">انضم الآن لتصبح جزءًا من مبادرة غذاؤنا من أيدينا</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            معًا نستطيع بناء مستقبل غذائي مستدام لغزة. شارك معنا في رحلة الاكتفاء الذاتي والتمكين المجتمعي.
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate("support")}
            className="bg-white text-primary hover:bg-white/90"
          >
            انضم الآن
          </Button>
        </div>
      </section>
    </div>
  );
}
