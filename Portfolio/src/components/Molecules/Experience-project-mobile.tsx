// Experience-project-mobile.tsx
import { useState, useEffect, useRef } from "react";

interface Tech {
  alt: string;
  iconUrl: string;
}

interface ExperienceProjectMobileProps {
  url: string;
  imageUrl: string;
  alt: string;
  title: string;
  techs: Tech[];
  Content: any; // Componente Astro
}

export function ExperienceProjectMobile({ 
  url, 
  imageUrl, 
  alt, 
  title, 
  techs, 
  Content 
}: ExperienceProjectMobileProps) {
  const [expand, setExpand] = useState(false);
  const [contentHtml, setContentHtml] = useState<string>('');
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setExpand(!expand);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Renderizar contenido Astro
  useEffect(() => {
    const renderContent = async () => {
      if (Content) {
        try {
          const { html } = await Content.render();
          console.log("html", html)
        } catch (error) {
          console.error('Error rendering Astro content:', error);
        }
      }
    };

    renderContent();
  }, [Content]);

  return (
    <div
      id="individual-experience-mobile"
      className="
        cursor-pointer
        transition-all 
        duration-300 
        ease-in-out 
        mb-5 
        p-3 
        border-1 
        bg-neutral-900 
        border-zinc-800 
        rounded-2xl 
        overflow-hidden
        relative
        pb-12
        w-full
      "
      onClick={handleClick}
    >
      {/* Imagen */}
      <div className="flex justify-center mb-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          <img
            src={imageUrl}
            alt={alt}
            className="rounded hover:scale-102 w-full max-w-xs transition-all duration-200 ease-in"
          />
        </a>
      </div>

      {/* Título */}
      <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>

      {/* Contenido expandible */}
      <div
        className="
          transition-all
          duration-300
          ease-in-out
          overflow-hidden
        "
        style={{
          gridTemplateRows: expand ? "1fr" : "0fr",
        }}
      >
        <div className="min-h-0 overflow-hidden">
          {/* Contenido renderizado de Astro */}
          <div 
            ref={contentRef}
            className="text-left text-sm [&_p]:my-2 [&_ul]:list-disc [&_ul]:pl-4 [&_li]:my-1"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
          
          {/* Tecnologías */}
          <div className="mt-4 flex justify-around flex-wrap gap-2">
            {techs.map((tech, index) => (
              <img 
                key={index}
                src={tech.iconUrl} 
                alt={tech.alt} 
                className="h-6 w-auto" 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer indicador */}
      <footer className="bg-neutral-800 absolute bottom-0 left-0 right-0 px-4 rounded-b-2xl">
        <h4 className="text-md text-center">
          {!expand ? "Expandir contenido ▼" : "Contraer contenido ▲"}
        </h4>
      </footer>
    </div>
  );
}