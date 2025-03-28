import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import React from "react";
import { useState } from "react";

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  techs: Tech[];
  Content: AstroComponentFactory;
}

interface Tech {
  alt: string;
  iconUrl: string;
}

export function Project({
  title,
  description,
  imageUrl,
  techs,
  Content,
}: ProjectProps) {
  const [expand, setExpand] = useState(false);

  const handleClick = () =>{
    setExpand(!expand)
  }

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
    project text-center p-5"
    onClick={handleClick}
    >
      {!expand ? (
        <div
          className="
        flex
        flex-col gap-5"
        
        >
          <h1 className="text-2xl">{title}</h1>

          <img src={imageUrl} alt={title} className="w-100 h-50" />

          <div className="flex w-1/1 justify-around">
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
        <div>
          <h1>{title}</h1>

        </div>
      )}
    </div>
  );
}
