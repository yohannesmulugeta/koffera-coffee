import { useEffect } from 'react';

const baseTitle = 'Koffera Coffee';
const baseDescription = 'Premium Ethiopian coffee presentation for international buyers.';

export default function useDocumentMeta(title, description = baseDescription) {
  useEffect(() => {
    document.title = title ? `${title} | ${baseTitle}` : `${baseTitle} | Premium Ethiopian Coffee`;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;

    return () => {
      document.title = `${baseTitle} | Premium Ethiopian Coffee`;
    };
  }, [description, title]);
}
