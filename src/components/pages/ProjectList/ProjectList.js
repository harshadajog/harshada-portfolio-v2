import React from 'react';
import Project from '../Project/Project';

import projects from '../../../resources/project-list';

class ProjectList extends React.Component {

  render() {
    const projectList = projects.map((project, i) => {
      return <Project data={project} key={i}></Project>
    })

    return (
      <div className="projects">
        <ul>
          {projectList}
        </ul>
      </div>
    )
  }
}

export default ProjectList;