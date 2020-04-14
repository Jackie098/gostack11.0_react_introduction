import React, { useState } from 'react';

import Header from './components/Header';

function App(){
  const [projects, setProjects] = useState(['alguma coisa', 'ota coisa']);

  function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`);

    setProjects([...projects, `Novo projeto ${Date.now()}`]);
    
    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Tip to add</button>
    </>
  );
}

export default App;