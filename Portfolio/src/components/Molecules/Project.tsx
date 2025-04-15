import { useState } from "react";

interface Tech {
  alt: string;
  iconUrl: string;
}

interface ProjectProps {
  project: {
    title: string;
    description: string;
    imageUrl: string;
    techs: Tech[];
    href: string;
    content: string;
  };
}

export function Project({ project }: ProjectProps) {
  const { title, description, imageUrl, techs, content, href } = project;
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
  };

  return (
    <div
      id="individual-project"
      className="
        cursor-pointer
        hover:brightness-120
        transition-all
        duration-300
        ease-in-out
        p-5
        bg-neutral-900
        border-1
        border-zinc-800
        rounded-2xl
        overflow-hidden
        flex
        flex-col
        h-min
        relative
        pb-10
      "
      onClick={handleClick}
    >
      <h3 className="text-2xl">{title}</h3>

      <img src={imageUrl} alt={title} className="w-100 h-35 sm:h-50 my-4 m-auto" />

      <div className="flex w-full justify-around mb-4">
        {techs.map((tech, index) => (
          <img
            key={index}
            src={tech.iconUrl}
            alt={tech.alt}
            className="h-8 w-auto"
          />
        ))}
      </div>
      
      <div
        className="
          grid
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
          <h4 className="text-xl">{description}</h4>
          <div
            className="
              [&_p]:my-4
              [&_ul]:list-disc [&_ul]:pl-6
              [&_li]:my-2
              [&_strong]:font-bold
              text-left
            "
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-blue-500 inline-block mt-4"
          >
            Ver más...
          </a>
        </div>
      </div>
      <footer className="bg-neutral-800 absolute bottom-0 left-0 right-0">
        <h4> {!expand? "Expandir contenido ▼ ":"Contraer contenido ▲"}</h4>
      </footer>
    </div>
  );
}