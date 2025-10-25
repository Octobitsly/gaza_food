import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { HandHeart, Package, Share2, Quote } from "lucide-react";

interface SupportPageProps {
  onNavigate: (page: string) => void;
}

export function SupportPage({ onNavigate }: SupportPageProps) {
  const supportMethods = [
    {
      icon: HandHeart,
      title: "التطوع",
      description: "انضم إلى فريق المتطوعين وساهم بوقتك ومهاراتك في تدريب العائلات وتقديم الاستشارات الزراعية",
      actions: [
        "التدريب والإرشاد الزراعي",
        "المساعدة في الورش التدريبية",
        "تنظيم الفعاليات المجتمعية",
        "توثيق قصص النجاح",
      ],
      buttonText: "سجل كمتطوع",
    },
    {
      icon: Package,
      title: "التبرع بالأدوات والبذور",
      description: "تبرع بالبذور، الأدوات الزراعية، معدات تربية الدواجن، أو أي مستلزمات تساعد العائلات على البدء",
      actions: [
        "بذور الخضروات والنباتات",
        "أدوات الزراعة والري",
        "أقفاص ومعدات الدواجن",
        "سماد عضوي ومستلزمات",
      ],
      buttonText: "تبرع بالمستلزمات",
    },
    {
      icon: Share2,
      title: "المشاركة على وسائل التواصل",
      description: "ساعدنا في نشر الوعي حول المبادرة ومشاركة قصص النجاح لتشجيع المزيد من العائلات على الانضمام",
      actions: [
        "مشاركة منشوراتنا على فيسبوك",
        "نشر فيديوهاتنا التعليمية",
        "دعوة الأصدقاء للانضمام",
        "التعليق والتفاعل مع المحتوى",
      ],
      buttonText: "شارك المبادرة",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-white">ادعم المبادرة</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              كل مساهمة تحدث فرقًا في حياة عائلة تسعى للاكتفاء الذاتي
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed mb-8">
            مبادرة "غذاؤنا من أيدينا" هي مبادرة تطوعية بالكامل، تعتمد على جهود المتطوعين والدعم المجتمعي. نحن لا نطلب تبرعات مالية، بل نسعى لبناء شبكة تضامن قوية من خلال التطوع، المشاركة، والدعم العيني.
          </p>
        </div>
      </section>

      {/* Support Methods */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-primary">كيف يمكنك المساعدة؟</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {supportMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-center mb-4 text-primary">{method.title}</h3>
                  <p className="text-center text-sm text-muted-foreground mb-6 leading-relaxed">
                    {method.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {method.actions.map((action, actionIndex) => (
                      <div key={actionIndex} className="text-sm bg-accent p-3 rounded-lg">
                        • {action}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full">{method.buttonText}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-accent border-primary/20 border-2">
            <CardContent className="p-8">
              <Quote className="w-12 h-12 text-primary mb-4 mx-auto" />
              <blockquote className="text-center text-lg leading-relaxed mb-4">
                "القوة الحقيقية لمجتمعنا تكمن في تضامننا وتعاوننا. عندما نعمل معًا، لا يوجد تحدٍ كبير جدًا. كل يد تساعد، كل بذرة تُزرع، كل معلومة تُشارك - كلها تساهم في بناء مستقبل أفضل لغزة."
              </blockquote>
              <p className="text-center text-muted-foreground">
                - فريق غذاؤنا من أيدينا
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-white">تأثيرك المباشر</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="mb-2 text-white">دعم التطوع</h3>
              <p className="text-sm opacity-90">
                ساعاتك التطوعية تمكّن عائلة من بدء مشروعها الزراعي بثقة ونجاح
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="mb-2 text-white">دعم الأدوات</h3>
              <p className="text-sm opacity-90">
                تبرعك بالأدوات والبذور يساعد عائلة على توفير 50% من احتياجاتها الغذائية
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📢</div>
              <h3 className="mb-2 text-white">دعم النشر</h3>
              <p className="text-sm opacity-90">
                مشاركتك للمحتوى تصل إلى 100+ عائلة جديدة قد تستفيد من المبادرة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center mb-8 text-primary">تواصل معنا</h2>
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">الاسم الكامل</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2">رقم الهاتف</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+970 123 456 789"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label htmlFor="support-type" className="block mb-2">نوع الدعم</label>
                  <select
                    id="support-type"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">اختر نوع الدعم</option>
                    <option value="volunteer">التطوع</option>
                    <option value="donate">التبرع بالمستلزمات</option>
                    <option value="share">المشاركة والنشر</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">رسالتك</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="أخبرنا كيف تريد المساعدة..."
                  ></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full">
                  إرسال
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-primary">كل مساهمة تصنع الفرق</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            سواء كنت تتطوع بساعة من وقتك، تتبرع ببعض البذور، أو تشارك منشورًا واحدًا - أنت جزء من التغيير ا��إيجابي في مجتمعنا
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate("contact")}
          >
            ابدأ المساهمة اليوم
          </Button>
        </div>
      </section>
    </div>
  );
}
