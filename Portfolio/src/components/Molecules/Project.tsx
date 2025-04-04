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
    href:string;
    content: string;
  };
}

export function Project({ project }: ProjectProps) {
  const { title, description, imageUrl, techs, content,href } = project;
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
  };

  return (
    <div
      id="individual-project"
      className="
    bg-white/1
    cursor-pointer
    hover:scale-102
    hover:brightness-120
    transition-all
    duration-300
    ease-in-out
    project text-center p-5
    h-min
    border-1
    border-violet-border
   
    "
      onClick={handleClick}
    >
      {!expand ? (
        <div
          className="
        flex
        flex-col 
        gap-5
        "
        >
          <h1 className="text-2xl">{title}</h1>

          <img src={imageUrl} alt={title} className="w-100 h-50" />

          <div className="flex w-full justify-around">
            {techs.map((tech, index) => {
              const { alt, iconUrl } = tech;
              return (
                <img
                  key={index}
                  src={iconUrl}
                  alt={alt}
                  className="h-8 w-auto"
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="col-span-2">
          <h1 className="text-2xl">{title}</h1>
          <h2 className="text-xl"> {description}</h2>
          <div
            className="[&_p]:my-4
      [&_ul]:list-disc [&_ul]:pl-6
      [&_li]:my-2
      [&_strong]:font-bold
      text-left"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <a href={href} target="_blank" onClick={(e) => e.stopPropagation()} className="text-blue-500 ">Ver más...</a>
        </div>
      )}
    </div>
  );
}
