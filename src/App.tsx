import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { HomeFarmingPage } from "./components/HomeFarmingPage";
import { PoultryPage } from "./components/PoultryPage";
import { LecturesPage } from "./components/LecturesPage";
import { SupportPage } from "./components/SupportPage";
import { GalleryPage } from "./components/GalleryPage";
import { ContactPage } from "./components/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage />;
      case "farming":
        return <HomeFarmingPage onNavigate={handleNavigate} />;
      case "poultry":
        return <PoultryPage onNavigate={handleNavigate} />;
      case "lectures":
        return <LecturesPage />;
      case "support":
        return <SupportPage onNavigate={handleNavigate} />;
      case "gallery":
        return <GalleryPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
