import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Send } from "lucide-react";

export function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-white">اتصل بنا</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              نحن هنا للإجابة على أسئلتك ومساعدتك في بدء رحلتك نحو الاكتفاء الذاتي
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-primary">أرسل لنا رسالة</h2>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2">الاسم الكامل *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2">البريد الإلكتروني *</label>
                    <input
                      type="email"
                      id="email"
                      required
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
                    <label htmlFor="subject" className="block mb-2">الموضوع *</label>
                    <select
                      id="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">اختر الموضوع</option>
                      <option value="farming">استفسار عن الزراعة المنزلية</option>
                      <option value="poultry">استفسار عن تربية الدواجن</option>
                      <option value="workshop">التسجيل في ورشة عمل</option>
                      <option value="volunteer">التطوع مع المبادرة</option>
                      <option value="partnership">الشراكة والتعاون</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2">رسالتك *</label>
                    <textarea
                      id="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 ml-2" />
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-6 text-primary">معلومات التواصل</h2>
            
            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-primary">البريد الإلكتروني</h3>
                      <p className="text-muted-foreground" dir="ltr">info@ourfoodfromourhands.org</p>
                      <p className="text-muted-foreground text-sm mt-1">نرد على الرسائل خلال 24 ساعة</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-primary">الهاتف</h3>
                      <p className="text-muted-foreground" dir="ltr">+970 123 456 789</p>
                      <p className="text-muted-foreground text-sm mt-1">السبت - الخميس: 9 صباحًا - 5 مساءً</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-primary">الموقع</h3>
                      <p className="text-muted-foreground">مركز التنمية المجتمعية</p>
                      <p className="text-muted-foreground">شارع الوحدة، غزة، فلسطين</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <Card className="bg-accent border-none">
              <CardContent className="p-6">
                <h3 className="mb-4 text-primary">تابعنا على وسائل التواصل</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-white transition-colors flex items-center justify-center"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-white transition-colors flex items-center justify-center"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-white transition-colors flex items-center justify-center"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  شارك قصتك معنا وكن جزءًا من مجتمع "غذاؤنا من أيدينا" على منصات التواصل الاجتماعي
                </p>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="mt-4">
              <CardContent className="p-6">
                <h3 className="mb-4 text-primary">ساعات العمل</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">السبت - الأربعاء</span>
                    <span dir="ltr">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">الخميس</span>
                    <span dir="ltr">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">الجمعة</span>
                    <span>مغلق</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-primary">أسئلة شائعة</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-primary">كيف أبدأ بالزراعة المنزلية؟</h3>
                <p className="text-muted-foreground leading-relaxed">
                  يمكنك التسجيل في ورشة العمل التمهيدية أو تحميل دليل المبتدئين من صفحة الزراعة المنزلية. فريقنا متاح أيضًا للاستشارات المجانية.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-primary">هل المبادرة مجانية؟</h3>
                <p className="text-muted-foreground leading-relaxed">
                  نعم، جميع خدماتنا مجانية تمامًا. نحن مبادرة تطوعية نعتمد على دعم المجتمع والمتطوعين.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-primary">هل توفرون البذور والأدوات؟</h3>
                <p className="text-muted-foreground leading-relaxed">
                  نساعد في توصيل المحتاجين بالمتبرعين، ونوفر أحيانًا بذور وأدوات أساسية حسب التوفر والحاجة.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-primary">كيف أتطوع معكم؟</h3>
                <p className="text-muted-foreground leading-relaxed">
                  يمكنك ملء نموذج التطوع من صفحة "ادعم المبادرة" أو التواصل معنا مباشرة عبر البريد الإلكتروني أو الهاتف.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
