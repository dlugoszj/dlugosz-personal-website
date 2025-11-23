import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Header from './components/Header'
import ProjectGrid from './components/ProjectGrid'
import Contact from './components/Contact'
import { PROJECTS } from './config'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <About />
      <Header />
      <main className="main-content">
        <ProjectGrid projects={PROJECTS} />
      </main>
      <Contact />
    </div>
  )
}

export default App

