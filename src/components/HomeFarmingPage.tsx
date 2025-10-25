import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Download, PlayCircle, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomeFarmingPageProps {
  onNavigate: (page: string) => void;
}

export function HomeFarmingPage({ onNavigate }: HomeFarmingPageProps) {
  const benefits = [
    "توفير في تكاليف الطعام والمواد الغذائية",
    "الحصول على خضروات طازجة وصحية خالية من المبيدات",
    "استغلال المساحات المتاحة في المنزل بشكل مفيد",
    "تعليم الأطفال قيمة الزراعة والاعتماد على النفس",
    "تحسين جودة الهواء والبيئة المحيطة",
    "خلق مصدر دخل إضافي من بيع الفائض",
  ];

  const bulletins = [
    {
      title: "دليل الزراعة المنزلية للمبتدئين",
      description: "كل ما تحتاج معرفته للبدء في زراعة الخضروات في المنزل",
      icon: "pdf",
    },
    {
      title: "أفضل النباتات للزراعة في غزة",
      description: "قائمة بالنباتات الأنسب للمناخ المحلي والظروف الحالية",
      icon: "pdf",
    },
    {
      title: "جدول الزراعة الموسمي",
      description: "متى وماذا تزرع في كل موسم من السنة",
      icon: "pdf",
    },
    {
      title: "حلول للمشاكل الشائعة",
      description: "كيفية التعامل مع الآفات والأمراض النباتية",
      icon: "pdf",
    },
  ];

  const videos = [
    {
      title: "كيفية تحضير التربة للزراعة",
      thumbnail: "https://images.unsplash.com/photo-1619284477225-647ffe3d91bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVkbGluZ3MlMjBwbGFudGluZ3xlbnwxfHx8fDE3NjE0MTMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "12:30",
    },
    {
      title: "زراعة الطماطم في المنزل",
      thumbnail: "https://images.unsplash.com/photo-1722837487012-9c46372435f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwdmVnZXRhYmxlJTIwZ2FyZGVufGVufDF8fHx8MTc2MTQxMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "15:45",
    },
    {
      title: "نظام الري بالتنقيط البسيط",
      thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZ3xlbnwxfHx8fDE3NjE0MTMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "10:20",
    },
    {
      title: "زراعة الأعشاب العطرية",
      thumbnail: "https://images.unsplash.com/photo-1751210769268-85d43ecfcdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBoYXJ2ZXN0fGVufDF8fHx8MTc2MTQxMjg5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "8:15",
    },
    {
      title: "صناعة السماد العضوي المنزلي",
      thumbnail: "https://images.unsplash.com/photo-1647771733859-d07c37a08940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBmYXJtaW5nfGVufDF8fHx8MTc2MTQxMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "14:00",
    },
    {
      title: "كيفية حصاد البذور وحفظها",
      thumbnail: "https://images.unsplash.com/photo-1619284477225-647ffe3d91bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVkbGluZ3MlMjBwbGFudGluZ3xlbnwxfHx8fDE3NjE0MTMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "11:30",
    },
  ];

  const successStories = [
    {
      name: "عائلة أبو سالم",
      story: "بدأنا بمساحة صغيرة على سطح المنزل، واليوم نوفر 70% من احتياجاتنا من الخضروات",
      image: "https://images.unsplash.com/photo-1722837487012-9c46372435f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwdmVnZXRhYmxlJTIwZ2FyZGVufGVufDF8fHx8MTc2MTQxMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "أم محمد",
      story: "تعلمت الزراعة في سن الستين، والآن أبيع الفائض من محصولي للجيران",
      image: "https://images.unsplash.com/photo-1751210769268-85d43ecfcdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBoYXJ2ZXN0fGVufDF8fHx8MTc2MTQxMjg5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "شباب الحي",
      story: "حولنا قطعة أرض مهملة إلى حديقة مجتمعية تخدم 20 عائلة",
      image: "https://images.unsplash.com/photo-1647771733859-d07c37a08940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBmYXJtaW5nfGVufDF8fHx8MTc2MTQxMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZ3xlbnwxfHx8fDE3NjE0MTMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="الزراعة المنزلية"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="mb-4 text-white">ابدأ الزراعة من بيتك</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              كل ما تحتاجه لبدء رحلتك في الزراعة المنزلية والحصول على غذاء صحي وطازج
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center mb-12 text-primary">لماذا الزراعة المنزلية؟</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-accent border-none">
            <CardContent className="p-8">
              <p className="mb-6 leading-relaxed">
                الزراعة المنزلية هي زراعة النباتات والخضروات في المساحات المتاحة حول المنزل أو على الأسطح، باستخدام أصص أو أحواض أو حتى قطع أراضي صغيرة. إنها طريقة عملية ومستدامة لتحقيق الأمن الغذائي وتحسين جودة الحياة.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bulletins Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-primary">نشرات علمية وتعليمية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {bulletins.map((bulletin, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Download className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">{bulletin.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{bulletin.description}</p>
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
        <h2 className="text-center mb-12 text-primary">فيديوهات تدريبية</h2>
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
          <h2 className="mb-4 text-white">هل أنت مستعد للبدء؟</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            انضم إلى مئات العائلات التي بدأت رحلتها نحو الاكتفاء الذاتي الغذائي
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={() => onNavigate("support")}
              className="bg-white text-primary hover:bg-white/90"
            >
              ابدأ الزراعة الآن
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("lectures")}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              احجز ورشة تدريبية
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
