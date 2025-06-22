
import { motion } from "framer-motion";
import { FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const PDFPreview = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageImages, setPageImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageImages = async () => {
      try {
        const pages = [];
        for (let i = 1; i <= 4; i++) {
          const { data } = await supabase.storage
            .from('pdf-resources')
            .getPublicUrl(`page${i}.png`);
          
          if (data?.publicUrl) {
            pages.push(data.publicUrl);
          }
        }
        setPageImages(pages);
      } catch (error) {
        console.error('Error fetching page images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPageImages();
  }, []);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageImages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageImages.length) % pageImages.length);
  };

  if (loading) {
    return (
      <section id="pdf-preview" className="py-12 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading preview...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="pdf-preview" className="py-12 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary">
              Preview Our Tax Guide
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Get a glimpse of our comprehensive student tax return guide
          </p>
        </motion.div>

        {pageImages.length > 0 && (
          <div className="relative max-w-2xl mx-auto">
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` } as React.CSSProperties}
              >
                {pageImages.map((imageUrl, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      src={imageUrl}
                      alt={`Page ${index + 1}`}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <button
              onClick={prevPage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-colors"
              disabled={pageImages.length <= 1}
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>

            <button
              onClick={nextPage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-colors"
              disabled={pageImages.length <= 1}
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>

            {/* Page Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {pageImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentPage ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
