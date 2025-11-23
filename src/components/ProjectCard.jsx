import { useState } from 'react'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-header">
        <h3 className="project-name">
          {project.name}
        </h3>
      </div>

      <p className="project-description">{project.description}</p>

      {project.topics && project.topics.length > 0 && (
        <div className="project-topics">
          {project.topics.slice(0, 5).map((topic) => (
            <span key={topic} className="topic-tag">
              {topic}
            </span>
          ))}
          {project.topics.length > 5 && (
            <span className="topic-tag more">+{project.topics.length - 5}</span>
          )}
        </div>
      )}

      <div className="card-footer">
        <div className="project-stats">
          {project.language && (
            <div className="stat-item">
              <span
                className="language-dot"
                style={{
                  backgroundColor: getLanguageColor(project.language),
                }}
              ></span>
              <span className="stat-text">{project.language}</span>
            </div>
          )}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
          onClick={(e) => e.stopPropagation()}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  )
}

// Language color mapping (GitHub colors)
const getLanguageColor = (language) => {
  const colors = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    Java: '#b07219',
    'C++': '#f34b7d',
    C: '#555555',
    'C#': '#239120',
    Ruby: '#701516',
    PHP: '#4F5D95',
    Go: '#00ADD8',
    Rust: '#dea584',
    Swift: '#ffac45',
    Kotlin: '#A97BFF',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Vue: '#41b883',
    React: '#61dafb',
    Shell: '#89e051',
    Dart: '#00B4AB',
    Scala: '#c22d40',
    R: '#198CE7',
    Lua: '#000080',
    Perl: '#0298c3',
    Haskell: '#5e5086',
    Clojure: '#db5855',
    Elixir: '#6e4a7e',
    OCaml: '#3be133',
    MATLAB: '#e16737',
    ObjectiveC: '#438eff',
    PowerShell: '#012456',
    TeX: '#3D6117',
    Vim: '#199f4b',
    Assembly: '#6E4C13',
    Makefile: '#427819',
    Dockerfile: '#384d54',
    CMake: '#064F8C',
    Groovy: '#4298b8',
    Julia: '#a270ba',
    Nim: '#ffc200',
    Crystal: '#000100',
    Zig: '#ec915c',
    PureScript: '#1D222D',
    Reason: '#ff5847',
    F: '#b845fc',
    Erlang: '#B83998',
    Elm: '#60B5CC',
    CoffeeScript: '#244776',
    Less: '#1d365d',
    Sass: '#cf649a',
    Stylus: '#ff6347',
    Markdown: '#083fa1',
    YAML: '#cb171e',
    JSON: '#000000',
    XML: '#0060ac',
    SQL: '#cc2927',
    GraphQL: '#e10098',
    WebAssembly: '#04133b',
    Solidity: '#AA6746',
    default: '#8b5cf6',
  }
  return colors[language] || colors.default
}

export default ProjectCard

