import { Project } from './Molecules/Project.tsx'
import projectsJson from '../content/json/Projects.json'



export function Projects(){

  const projects = projectsJson.Projects
  const hasProjects = projects ?.length>0

  if(hasProjects){
    console.log(projects)
  }

return(
    <div className="w-2/3 m-auto text-center">
        <h1 className="text-5xl pb-15">Proyectos</h1>
        <div id="project-container">

        </div>
      </div>
)

}