import React from 'react';
import './App.css';
import NavbarComponent from './components/navbar.component';
import HomeComponent from './components/home.component';
import ProjectsComponent from './components/projects.component';
import SkillsComponent from './components/skills.component';
import AboutComponent from './components/about.component';
import FooterComponent from './components/footer.component';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HomeComponent />
      <ProjectsComponent />
      <SkillsComponent />
      <AboutComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
