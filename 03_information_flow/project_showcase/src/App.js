import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");


  const handleProjects = () => {
    fetch("http://localhost:4000/projects")
    .then((response) => response.json())
    .then((projects) => setProjects(projects))
  }

  const handleClick = () => setIsDarkMode(!isDarkMode);
  const handleOnChange = (e) => setSearchQuery(e.target.value);

  const appTheme = isDarkMode ? 'App' : 'App light'
  return (
    <div className={appTheme}>
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        handleClick={handleClick}
         />
      <ProjectForm />
      <button onClick={handleProjects}>Load Projects</button>
      <ProjectList
        projects={projects}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleOnChange={handleOnChange}
        />
    </div>
  );
};

export default App;
