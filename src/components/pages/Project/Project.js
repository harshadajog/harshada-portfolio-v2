import React from 'react';

import './Project.styles.scss';

function Project(props) {
  const { name, description, details, tools, git, link, codepen } = props.data;
  const toolList = tools.map((tool, i) => <div key={i}>{tool}</div>);
  const detailList = details.map((detail, i) => <li key={i}>{detail}</li>);

  // const src = require(`../assets/projects/${image}.jpg`);

  return (
    <li className="project">
      {/* <img src={src} alt={name} /> */}
      <div className="project-description">
        <div className="project-name">
          {name}
        </div>

        <p>
          {description}
        </p>

        <ul>
          {detailList}
        </ul>

        <div className="project-tools">
          {toolList}
        </div>

        {link && <a href={link} target="_blank" rel="noopener noreferrer">Live</a>}
        {git && <a href={git} target="_blank" rel="noopener noreferrer">Github</a>}
        {codepen && <a href={codepen} target="_blank" rel="noopener noreferrer">CodePen</a>}
      </div>

    </li>
  )
}

export default Project;