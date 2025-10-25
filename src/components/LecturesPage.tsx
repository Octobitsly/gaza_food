import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Clock, MapPin, PlayCircle, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function LecturesPage() {
  const upcomingWorkshops = [
    {
      title: "أساسيات الزراعة المنزلية",
      date: "15 نوفمبر 2025",
      time: "10:00 صباحًا - 12:00 ظهرًا",
      location: "مركز التنمية المجتمعية - غزة",
      seats: "20 مقعد متاح",
      instructor: "د. سعود الشوا",
      image: "https://images.unsplash.com/photo-1581092161557-edc82c7a9af0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjE0MTMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "تربية الدواجن المنزلية",
      date: "20 نوفمبر 2025",
      time: "3:00 مساءً - 5:00 مساءً",
      location: "مزرعة النموذجية - خانيونس",
      seats: "15 مقعد متاح",
      instructor: "د. محمد أبو شمالة",
      image: "https://images.unsplash.com/photo-1624668431028-75dfeafd9b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMGNoaWNrZW5zfGVufDF8fHx8MTc2MTMxNjAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "صناعة السماد العضوي",
      date: "25 نوفمبر 2025",
      time: "9:00 صباحًا - 11:00 صباحًا",
      location: "حديقة المجتمع - رفح",
      seats: "25 مقعد متاح",
      instructor: "م. نزار الوحيدي",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZ3xlbnwxfHx8fDE3NjE0MTMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "نظم الري الحديثة",
      date: "1 ديسمبر 2025",
      time: "2:00 مساءً - 4:00 مساءً",
      location: "مركز الشباب - البريج",
      seats: "18 مقعد متاح",
      instructor: "م. نزار الوحيدي",
      image: "https://images.unsplash.com/photo-1722837487012-9c46372435f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwdmVnZXRhYmxlJTIwZ2FyZGVufGVufDF8fHx8MTc2MTQxMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const recordedSessions = [
    {
      title: "ورشة الزراعة المنزلية - الجزء الأول",
      date: "10 أكتوبر 2025",
      duration: "1:45:30",
      views: "523 مشاهدة",
      thumbnail: "https://images.unsplash.com/photo-1619284477225-647ffe3d91bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVkbGluZ3MlMjBwbGFudGluZ3xlbnwxfHx8fDE3NjE0MTMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "محاضرة: مكافحة الآفات الزراعية بطرق طبيعية",
      date: "5 أكتوبر 2025",
      duration: "58:20",
      views: "412 مشاهدة",
      thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZ3xlbnwxfHx8fDE3NjE0MTMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "تربية الدواجن: من البداية للنجاح",
      date: "28 سبتمبر 2025",
      duration: "2:10:15",
      views: "687 مشاهدة",
      thumbnail: "https://images.unsplash.com/photo-1624668431028-75dfeafd9b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMGNoaWNrZW5zfGVufDF8fHx8MTc2MTMxNjAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "ندوة: الأمن الغذائي في غزة",
      date: "20 سبتمبر 2025",
      duration: "1:30:45",
      views: "892 مشاهدة",
      thumbnail: "https://images.unsplash.com/photo-1647771733859-d07c37a08940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBmYXJtaW5nfGVufDF8fHx8MTc2MTQxMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "ورشة: تربية الأرانب المنزلية",
      date: "15 سبتمبر 2025",
      duration: "1:15:00",
      views: "345 مشاهدة",
      thumbnail: "https://images.unsplash.com/photo-1688565915204-0529f5ceefd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWJiaXRzJTIwZmFybXxlbnwxfHx8fDE3NjE0MTMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "التسميد العضوي والكومبوست",
      date: "8 سبتمبر 2025",
      duration: "52:30",
      views: "278 مشاهدة",
      thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZ3xlbnwxfHx8fDE3NjE0MTMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-white">المحاضرات التثقيفية</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              تعلم من خبرائنا في ورش العمل والمحاضرات المباشرة والمسجلة
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-primary">ورش العمل القادمة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingWorkshops.map((workshop, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <ImageWithFallback
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-4 text-primary">{workshop.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{workshop.seats}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">المحاضر: {workshop.instructor}</p>
                  <Button size="sm">سجل الآن</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recorded Sessions */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-primary">الجلسات المسجلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recordedSessions.map((session, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative aspect-video">
                  <ImageWithFallback
                    src={session.thumbnail}
                    alt={session.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {session.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-sm mb-2">{session.title}</h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{session.date}</span>
                    <span>{session.views}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white">
          <h2 className="mb-4 text-white">هل تريد المشاركة؟</h2>
          <p className="text-lg mb-8 opacity-90">
            إذا كنت من أصحاب الخبرة في المجال الزراعي أو الحيواني، يمكنك التطوع لإلقاء محاضرات وورش عمل تساعد المجتمع
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              تطوع كمحاضر
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              اقترح موضوع محاضرة
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
