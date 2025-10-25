import { Leaf, Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* روابط سريعة */}
          <div>
            <h3 className="mb-4 text-primary">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  الصفحة الرئيسية
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  الزراعة المنزلية
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  تربية الدواجن والأرانب
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  المحاضرات التثقيفية
                </a>
              </li>
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div>
            <h3 className="mb-4 text-primary">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@ourfoodfromourhands.org</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span dir="ltr">+970 123 456 789</span>
              </li>
            </ul>
          </div>

          {/* وسائل التواصل الاجتماعي */}
          <div>
            <h3 className="mb-4 text-primary">تابعنا</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* الشعار */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-primary" />
              <span className="text-lg text-primary">غذاؤنا من أيدينا</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              معًا نحو اكتفاء غذائي مستدام في غزة
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} غذاؤنا من أيدينا. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
