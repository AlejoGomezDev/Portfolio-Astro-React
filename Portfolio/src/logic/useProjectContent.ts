import { useState, useEffect } from 'react';

export function useProjectContent(contentFile: string) {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (!contentFile) {
          setContent('');
          return;
        }

        // Asumiendo que tus archivos HTML están en public/content/projects/
        const response = await fetch(contentFile);
        
        if (!response.ok) {
          throw new Error(`No se pudo cargar: ${contentFile}`);
        }
        
        const htmlContent = await response.text();
        setContent(htmlContent);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
        setContent('<p>Error cargando el contenido</p>');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [contentFile]);

  return { content, loading, error };
}