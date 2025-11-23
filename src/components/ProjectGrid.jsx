import ProjectCard from './ProjectCard'
import './ProjectGrid.css'

const ProjectGrid = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <h2>No projects found</h2>
        <p>It looks like you don't have any public repositories yet.</p>
      </div>
    )
  }

  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard key={project.name || index} project={{...project, index}} />
      ))}
    </div>
  )
}

export default ProjectGrid

