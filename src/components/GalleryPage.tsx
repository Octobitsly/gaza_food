import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filters = [
    { id: "all", label: "الكل" },
    { id: "farming", label: "أنشطة الزراعة" },
    { id: "workshops", label: "ورش التدريب" },
    { id: "success", label: "قصص النجاح" },
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1722837487012-9c46372435f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwdmVnZXRhYmxlJTIwZ2FyZGVufGVufDF8fHx8MTc2MTQxMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "farming",
      title: "حديقة منزلية نموذجية",
    },
    {
      src: "https://images.unsplash.com/photo-1619284477225-647ffe3d91bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVkbGluZ3MlMjBwbGFudGluZ3xlbnwxfHx8fDE3NjE0MTMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "farming",
      title: "زراعة الشتلات",
    },
    {
      src: "https://images.unsplash.com/photo-1581092161557-edc82c7a9af0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjE0MTMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "workshops",
      title: "ورشة تدريبية",
    },
    {
      src: "https://images.unsplash.com/photo-1624668431028-75dfeafd9b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMGNoaWNrZW5zfGVufDF8fHx8MTc2MTMxNjAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "success",
      title: "مشروع دواجن ناجح",
    },
    {
      src: "https://images.unsplash.com/photo-1751210769268-85d43ecfcdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBoYXJ2ZXN0fGVufDF8fHx8MTc2MTQxMjg5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "success",
      title: "حصاد وفير",
    },
    {
      src: "https://images.unsplash.com/photo-1647771733859-d07c37a08940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBmYXJtaW5nfGVufDF8fHx8MTc2MTQxMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "success",
      title: "حديقة مجتمعية",
    },
    {
      src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZ3xlbnwxfHx8fDE3NjE0MTMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "farming",
      title: "زراعة عضوية",
    },
    {
      src: "https://images.unsplash.com/photo-1688565915204-0529f5ceefd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWJiaXRzJTIwZmFybXxlbnwxfHx8fDE3NjE0MTMzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "success",
      title: "تربية الأرانب",
    },
    {
      src: "https://images.unsplash.com/photo-1722837487012-9c46372435f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwdmVnZXRhYmxlJTIwZ2FyZGVufGVufDF8fHx8MTc2MTQxMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "workshops",
      title: "تدريب عملي",
    },
    {
      src: "https://images.unsplash.com/photo-1619284477225-647ffe3d91bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVkbGluZ3MlMjBwbGFudGluZ3xlbnwxfHx8fDE3NjE0MTMzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "farming",
      title: "نباتات صغيرة",
    },
    {
      src: "https://images.unsplash.com/photo-1751210769268-85d43ecfcdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBoYXJ2ZXN0fGVufDF8fHx8MTc2MTQxMjg5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "farming",
      title: "خضروات طازجة",
    },
    {
      src: "https://images.unsplash.com/photo-1647771733859-d07c37a08940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBmYXJtaW5nfGVufDF8fHx8MTc2MTQxMzM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "workshops",
      title: "تدريب جماعي",
    },
  ];

  const filteredImages = selectedFilter === "all" 
    ? images 
    : images.filter(img => img.category === selectedFilter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-white">معرض الصور</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              استعرض صورًا من أنشطتنا وورش العمل وقصص النجاح الملهمة
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter.id)}
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square relative">
                <ImageWithFallback
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm">{image.title}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 left-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <ImageWithFallback
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white text-lg">{filteredImages[selectedImage].title}</p>
            <p className="text-white/70 text-sm mt-2">
              {selectedImage + 1} / {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
