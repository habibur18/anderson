// "use client";

// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import Image from "next/image";
// import { useState } from "react";
// import { FadeIn, ScaleIn } from "./animations";

// const galleryImages = [
//   { src: "/projects/1.jpg", alt: "Hardwood flooring in living room" },
//   { src: "/projects/2.jpg", alt: "Luxury vinyl tiles in kitchen" },
//   { src: "/projects/3.jpg", alt: "Carpet installation in bedroom" },
//   { src: "/projects/4.jpg", alt: "Custom tile work in bathroom" },
//   { src: "/projects/5.jpg", alt: "Stone flooring in entryway" },
//   { src: "/projects/6.jpg", alt: "Commercial carpet installation" },
// ];

// export function GallerySection() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const openLightbox = (index) => setSelectedImage(index);
//   const closeLightbox = () => setSelectedImage(null);

//   return (
//     <section id="gallery" className="py-20 bg-gray-50">
//       <div className="container">
//         <FadeIn>
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Recent Projects</h2>
//             <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">Explore our portfolio of completed flooring projects across Ottawa County and West Michigan</p>
//           </div>
//         </FadeIn>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {galleryImages.map((image, index) => (
//             <ScaleIn key={index} delay={index * 0.1}>
//               <div className="relative h-64 cursor-pointer group overflow-hidden rounded-lg" onClick={() => openLightbox(index)}>
//                 <Image src={image.src} alt={image.alt} fill className="object-cover transition duration-300 group-hover:scale-110" />
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
//                   <Button variant="outline" className="text-white border-white">
//                     View Project
//                   </Button>
//                 </div>
//               </div>
//             </ScaleIn>
//           ))}
//         </div>
//       </div>
//       <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
//         <DialogContent className="max-w-4xl p-0 overflow-hidden">
//           {selectedImage !== null && (
//             <div className="relative h-[80vh]">
//               <Image src={galleryImages[selectedImage].src} alt={galleryImages[selectedImage].alt} fill className="object-contain" />
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </section>
//   );
// }

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

const galleryImages = [
  { id: 1, src: "/projects/1.jpg", alt: "Hardwood flooring in living room" },
  { id: 2, src: "/projects/2.jpg", alt: "Luxury vinyl tiles in kitchen" },
  { id: 3, src: "/projects/3.jpg", alt: "Carpet installation in bedroom" },
  { id: 4, src: "/projects/4.jpg", alt: "Custom tile work in bathroom" },
  { id: 5, src: "/projects/5.jpg", alt: "Stone flooring in entryway" },
  { id: 6, src: "/projects/6.jpg", alt: "Commercial carpet installation" },
  { id: 7, src: "/projects/7.jpg", alt: "Hardwood flooring in living room" },
  { id: 8, src: "/projects/8.jpg", alt: "Luxury vinyl tiles in kitchen" },
];

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);

  const navigate = useCallback((direction) => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex === null) return null;
      const newIndex = direction === "next" ? (prevIndex + 1) % galleryImages.length : (prevIndex - 1 + galleryImages.length) % galleryImages.length;
      return newIndex;
    });
  }, []);

  return (
    <div id="gallery" className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Recent Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((graduate, index) => (
          <GraduateCard key={graduate.id} graduate={graduate} onClick={() => setSelectedIndex(index)} />
        ))}
      </div>
      <AnimatePresence>{selectedIndex !== null && <Lightbox graduate={galleryImages[selectedIndex]} onClose={closeModal} onNavigate={navigate} />}</AnimatePresence>
    </div>
  );
}

function GraduateCard({ graduate, onClick }) {
  return (
    <motion.div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={onClick} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.05 }}>
      <Image src={graduate.src} alt={`Graduate ${graduate.id}`} width={400} height={300} className="w-full h-auto object-cover" />
    </motion.div>
  );
}

function Lightbox({ graduate, onClose, onNavigate }) {
  return (
    <motion.div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="relative max-w-4xl w-full h-full flex items-center justify-center" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()}>
        <Image src={graduate.src} alt={`Graduate ${graduate.id}`} width={1200} height={800} className="max-w-full max-h-full object-contain" />
        <motion.button className="absolute top-4 right-4 text-white" onClick={onClose} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <X size={48} className="text-blue-600" />
        </motion.button>
        <motion.button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" onClick={() => onNavigate("prev")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <ChevronLeft size={40} />
        </motion.button>
        <motion.button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" onClick={() => onNavigate("next")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <ChevronRight size={40} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
