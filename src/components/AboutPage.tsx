import { Card, CardContent } from "./ui/card";
import { Target, Eye, Users, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  const team = [
    {
      name: "د. سعود الشوا",
      role: "مستشار زراعي",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZ3xlbnwxfHx8fDE3NjE0MTMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "م. نزار الوحيدي",
      role: "مهندس زراعي",
      image: "https://images.unsplash.com/photo-1581092161557-edc82c7a9af0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjE0MTMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "أ. فاطمة المصري",
      role: "منسقة المتطوعين",
      image: "https://images.unsplash.com/photo-1647771733859-d07c37a08940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBmYXJtaW5nfGVufDF8fHx8MTc2MTQxMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "د. محمد أبو شمالة",
      role: "خبير تربية الدواجن",
      image: "https://images.unsplash.com/photo-1722837487012-9c46372435f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwdmVnZXRhYmxlJTIwZ2FyZGVufGVufDF8fHx8MTc2MTQxMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const partners = [
    "الجمعية الفلسطينية للزراعة المستدامة",
    "مركز التنمية المجتمعية - غزة",
    "مبادرة الشباب للتغيير",
    "جمعية المزارعين الفلسطينيين",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-white">من نحن</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              مبادرة إنسانية مجتمعية تسعى لتحقيق الأمن الغذائي في قطاع غزة
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-accent p-8 rounded-xl mb-12">
            <h2 className="mb-6 text-primary">قصتنا</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                في ظل الظروف الصعبة التي يعيشها قطاع غزة والحصار المفروض عليه منذ سنوات، تفاقمت أزمة الأمن الغذائي بشكل كبير. ارتفعت أسعار المواد الغذائية الأساسية، وأصبح الوصول إلى الغذاء الصحي والطازج تحديًا يوميًا للكثير من العائلات.
              </p>
              <p>
                من هنا جاءت فكرة مبادرة "غذاؤنا من أيدينا" - كحل عملي ومستدام لمواجهة هذه التحديات. بدأنا رحلتنا في عام 2023 بمجموعة صغيرة من المتطوعين الذين آمنوا بأن الحل يكمن في تمكين العائلات من إنتاج غذائها بنفسها.
              </p>
              <p>
                اليوم، نفخر بكوننا مجتمعًا متناميًا من المزارعين المنزليين والمربين والخبراء والمتطوعين الذين يعملون معًا لتحقيق رؤية واحدة: غزة قادرة على إطعام نفسها.
              </p>
            </div>
          </div>

          {/* Main Goals */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-primary">الهدف الرئيسي</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      تحقيق الأمن الغذائي للعائلات في غزة من خلال تعزيز الزراعة المنزلية وتربية الدواجن والأرانب كمصدر مستدام للغذاء والدخل.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-primary">الأهداف التفصيلية</h3>
                    <ul className="text-muted-foreground space-y-1 list-disc list-inside leading-relaxed">
                      <li>توفير التدريب والإرشاد الزراعي</li>
                      <li>دعم المشاريع المنزلية الصغيرة</li>
                      <li>بناء شبكة تضامن مجتمعية</li>
                      <li>تعزيز الوعي بالأمن الغذائي</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Eye className="w-12 h-12 text-primary" />
              <h2 className="text-primary">رؤيتنا</h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-center text-lg leading-relaxed mb-6">
                نحلم بغزة حيث كل عائلة قادرة على إنتاج غذائها الصحي والطازج�� مجتمع يتمتع بالاكتفاء الذاتي الغذائي، ويعيش بكرامة واستقلالية. نسعى لأن نكون نموذجًا يُحتذى به في تحويل التحديات إلى فرص، والأزمات إلى حلول مستدامة.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-accent rounded-lg">
                  <div className="text-2xl text-primary mb-2">الاستدامة</div>
                  <p className="text-sm text-muted-foreground">حلول طويلة الأمد</p>
                </div>
                <div className="p-4 bg-accent rounded-lg">
                  <div className="text-2xl text-primary mb-2">التمكين</div>
                  <p className="text-sm text-muted-foreground">قدرة على الاعتماد الذاتي</p>
                </div>
                <div className="p-4 bg-accent rounded-lg">
                  <div className="text-2xl text-primary mb-2">الكرامة</div>
                  <p className="text-sm text-muted-foreground">حياة مستقلة وآمنة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Users className="w-12 h-12 text-primary" />
          <h2 className="text-primary">فريقنا</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-primary">شركاؤنا</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg text-center hover:shadow-md transition-shadow"
                >
                  <p className="text-primary">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
