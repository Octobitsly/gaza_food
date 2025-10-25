import { Leaf, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "الصفحة الرئيسية" },
    { id: "about", label: "من نحن" },
    { id: "farming", label: "الزراعة المنزلية" },
    { id: "poultry", label: "تربية الدواجن والأرانب" },
    { id: "lectures", label: "المحاضرات التثقيفية" },
    { id: "support", label: "ادعم المبادرة" },
    { id: "gallery", label: "معرض الصور" },
    { id: "contact", label: "اتصل بنا" },
  ];

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - right side in RTL */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Leaf className="w-8 h-8 text-primary" />
            <span className="text-xl text-primary">غذاؤنا من أيدينا</span>
          </button>

          {/* Desktop Navigation - left side in RTL */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-accent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg text-right transition-colors ${
                    currentPage === item.id
                      ? "bg-primary text-white"
                      : "text-foreground hover:bg-accent"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
