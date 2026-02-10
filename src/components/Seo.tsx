import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description?: string;
}

const Seo = ({ title, description }: SeoProps) => {
  useEffect(() => {
    // Sayfa başlığını güncelle
    document.title = title;

    // Meta description güncelle veya oluştur
    if (description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [title, description]);

  // Görünür içerik üretmediği için null döndürüyoruz
  return null;
};

export default Seo;

